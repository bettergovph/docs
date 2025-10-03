#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const BETTERGOV_REPO = 'bettergovph/bettergov';
const BETTERGOV_BRANCH = 'main';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * Clean content for MDX compatibility
 */
function cleanForMDX(content) {
  // Replace HTML comments with JSX comments
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  
  // Replace unsupported code block languages
  const languageMap = {
    'env': 'bash',
    'dotenv': 'bash',
    'shell': 'bash',
  };
  
  Object.entries(languageMap).forEach(([from, to]) => {
    const regex = new RegExp('```' + from + '\\b', 'g');
    content = content.replace(regex, '```' + to);
  });
  
  return content;
}

// Files to sync from BetterGov repository
const FILES_TO_SYNC = [
  {
    source: 'README.md',
    target: 'content/docs/about.mdx',
    transform: (content) => {
      // Convert README.md to MDX format with frontmatter
      const frontmatter = `---
title: About BetterGov
description: Learn about the BetterGov initiative and our mission to improve Philippine government websites
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'docs/Meilisearch.md',
    target: 'content/docs/meilisearch.mdx',
    transform: (content) => {
      // Add frontmatter for Meilisearch documentation
      const frontmatter = `---
title: Meilisearch Setup
description: Configure and use Meilisearch for search functionality in BetterGov
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'CONTRIBUTING.md',
    target: 'content/docs/contributing/index.mdx',
    transform: (content) => {
      // Add frontmatter for contributing guide
      const frontmatter = `---
title: Contributing
description: Learn how to contribute to the BetterGov project
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'CODE_OF_CONDUCT.md',
    target: 'content/docs/contributing/code-of-conduct.mdx',
    transform: (content) => {
      // Add frontmatter for code of conduct
      const frontmatter = `---
title: Code of Conduct
description: Our community guidelines and code of conduct
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'TESTING.md',
    target: 'content/docs/contributing/testing.mdx',
    transform: (content) => {
      // Add frontmatter for testing guide
      const frontmatter = `---
title: Testing Guide
description: Testing guidelines and setup for BetterGov
---

`;
      return frontmatter + cleanForMDX(content);
    }
  }
];

/**
 * Fetch content from GitHub API
 */
async function fetchFromGitHub(filePath) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${BETTERGOV_REPO}/contents/${filePath}?ref=${BETTERGOV_BRANCH}`;
    
    const options = {
      headers: {
        'User-Agent': 'BetterGov-Docs-Sync',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    if (GITHUB_TOKEN) {
      options.headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    https.get(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.content) {
            // Decode base64 content
            const content = Buffer.from(response.content, 'base64').toString('utf-8');
            resolve(content);
          } else {
            reject(new Error(`File not found: ${filePath}`));
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

/**
 * Check if file exists in BetterGov repository
 */
async function fileExists(filePath) {
  try {
    await fetchFromGitHub(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Sync a single file
 */
async function syncFile(fileConfig) {
  try {
    console.log(`Syncing ${fileConfig.source}...`);
    
    // Check if source file exists
    const exists = await fileExists(fileConfig.source);
    if (!exists) {
      console.log(`WARNING: Source file ${fileConfig.source} not found, skipping...`);
      return false;
    }

    // Fetch content from BetterGov
    const content = await fetchFromGitHub(fileConfig.source);
    
    // Transform content if transform function is provided
    const transformedContent = fileConfig.transform ? fileConfig.transform(content) : content;
    
    // Ensure target directory exists
    const targetDir = path.dirname(fileConfig.target);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Write to target file
    fs.writeFileSync(fileConfig.target, transformedContent, 'utf-8');
    console.log(`SUCCESS: Synced ${fileConfig.source} → ${fileConfig.target}`);
    return true;
    
  } catch (error) {
    console.error(`ERROR: Error syncing ${fileConfig.source}:`, error.message);
    return false;
  }
}

/**
 * Main sync function
 */
async function syncDocumentation() {
  console.log('Starting documentation sync from BetterGov...');
  console.log(`Repository: ${BETTERGOV_REPO}`);
  console.log(`Branch: ${BETTERGOV_BRANCH}`);
  console.log('');

  let syncedCount = 0;
  let totalFiles = FILES_TO_SYNC.length;

  for (const fileConfig of FILES_TO_SYNC) {
    const success = await syncFile(fileConfig);
    if (success) {
      syncedCount++;
    }
    
    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('');
  console.log(`Sync Summary:`);
  console.log(`   Successfully synced: ${syncedCount}/${totalFiles} files`);
  console.log(`   Failed: ${totalFiles - syncedCount}/${totalFiles} files`);
  
  if (syncedCount > 0) {
    console.log('');
    console.log('Documentation sync completed successfully!');
  } else {
    console.log('');
    console.log('WARNING: No files were synced. Check the logs above for details.');
  }
}

// Run the sync
if (require.main === module) {
  syncDocumentation().catch((error) => {
    console.error('ERROR: Sync failed:', error);
    process.exit(1);
  });
}

module.exports = { syncDocumentation, syncFile };
