'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { LockIcon } from '@/components/icons';


interface Parameter {
  name: string;
  type: string;
  required?: boolean;
  description: string;
  example?: string;
  default?: string;
}

interface ResponseExample {
  status: number;
  description: string;
  body: string;
  contentType?: string;
}

interface ApiEndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpoint: string;
  title: string;
  description: string;
  parameters?: Parameter[];
  queryParams?: Parameter[];
  requestBody?: {
    contentType: string;
    schema: string;
    example: string;
  };
  responses: ResponseExample[];
  authentication?: {
    required: boolean;
    type?: string;
    description?: string;
  };
  className?: string;
}

const methodColors = {
  GET: 'bg-blue-500 text-white',
  POST: 'bg-green-500 text-white',
  PUT: 'bg-orange-500 text-white',
  DELETE: 'bg-red-500 text-white',
  PATCH: 'bg-purple-500 text-white',
};

export function ApiEndpoint({
  method,
  endpoint,
  title,
  description,
  parameters = [],
  queryParams = [],
  requestBody,
  responses,
  authentication,
  className
}: ApiEndpointProps) {
  const [activeTab, setActiveTab] = useState<'request' | 'response'>('request');

  return (
    <div className={cn('border border-border rounded-lg overflow-hidden', className)}>
      {/* Header */}
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <span className={cn('font-mono text-xs px-2 py-1 rounded', methodColors[method])}>
            {method}
          </span>
          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
            {endpoint}
          </code>
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        
        {authentication?.required && (
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-border">
              <LockIcon className="h-3 w-3" />
              <span>Authentication Required</span>
            </div>
            {authentication.type && (
              <span className="text-xs text-muted-foreground">
                {authentication.type}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tab Navigation */}
        <div className="flex border-b border-border mb-6">
          <button
            onClick={() => setActiveTab('request')}
            className={cn(
              'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
              activeTab === 'request'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            )}
          >
            Request
          </button>
          <button
            onClick={() => setActiveTab('response')}
            className={cn(
              'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
              activeTab === 'response'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            )}
          >
            Response
          </button>
        </div>

        {/* Request Tab */}
        {activeTab === 'request' && (
          <div className="space-y-6">
            {/* Path Parameters */}
            {parameters.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-3">Path Parameters</h4>
                <div className="space-y-3">
                  {parameters.map((param) => (
                    <div key={param.name} className="border border-border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                          {param.name}
                        </code>
                        <span className="text-xs px-2 py-1 rounded border border-border">
                          {param.type}
                        </span>
                        {param.required && (
                          <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {param.description}
                      </p>
                      {param.example && (
                        <div className="text-xs">
                          <span className="text-muted-foreground">Example: </span>
                          <code className="bg-muted px-1 py-0.5 rounded">
                            {param.example}
                          </code>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Query Parameters */}
            {queryParams.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-3">Query Parameters</h4>
                <div className="space-y-3">
                  {queryParams.map((param) => (
                    <div key={param.name} className="border border-border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                          {param.name}
                        </code>
                        <span className="text-xs px-2 py-1 rounded border border-border">
                          {param.type}
                        </span>
                        {param.required && (
                          <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                            Required
                          </span>
                        )}
                        {param.default && (
                          <span className="text-xs px-2 py-1 rounded bg-gray-500 text-white">
                            Default: {param.default}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {param.description}
                      </p>
                      {param.example && (
                        <div className="text-xs">
                          <span className="text-muted-foreground">Example: </span>
                          <code className="bg-muted px-1 py-0.5 rounded">
                            {param.example}
                          </code>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Request Body */}
            {requestBody && (
              <div>
                <h4 className="text-sm font-semibold mb-3">Request Body</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded border border-border">
                      {requestBody.contentType}
                    </span>
                  </div>
                  
                  {requestBody.schema && (
                    <div>
                      <h5 className="text-xs font-medium text-muted-foreground mb-2">Schema</h5>
                      <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-sm">
                        <code>{requestBody.schema}</code>
                      </pre>
                    </div>
                  )}
                  
                  {requestBody.example && (
                    <div>
                      <h5 className="text-xs font-medium text-muted-foreground mb-2">Example</h5>
                      <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-sm">
                        <code>{requestBody.example}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Response Tab */}
        {activeTab === 'response' && (
          <div className="space-y-6">
            <h4 className="text-sm font-semibold mb-3">Responses</h4>
            <div className="space-y-4">
              {responses.map((response, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className={cn(
                        'text-xs px-2 py-1 rounded',
                        response.status >= 200 && response.status < 300
                          ? 'bg-green-500 text-white'
                          : response.status >= 400
                          ? 'bg-red-500 text-white'
                          : 'bg-blue-500 text-white'
                      )}
                    >
                      {response.status}
                    </span>
                    <span className="text-sm font-medium">{response.description}</span>
                    {response.contentType && (
                      <span className="text-xs px-2 py-1 rounded border border-border">
                        {response.contentType}
                      </span>
                    )}
                  </div>
                  
                  {response.body && (
                    <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-sm">
                      <code>{response.body}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}