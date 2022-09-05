import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface TibberQuery extends DataQuery {
  queryText?: string;
  constant: number;
  withStreaming: boolean;
}

export const defaultQuery: Partial<TibberQuery> = {
  constant: 6.5,
  withStreaming: false,
};

/**
 * These are options configured for each DataSource instance.
 */
export interface TibberDataSourceOptions extends DataSourceJsonData {
  home: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface TibberDataSourceSecureJsonData {
  apiKey: string;
}
