import { DataSourceInstanceSettings } from '@grafana/data';
import { DataSourceWithBackend } from '@grafana/runtime';
import { TibberQuery, TibberDataSourceOptions } from './types';

export class DataSource extends DataSourceWithBackend<TibberQuery, TibberDataSourceOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<TibberDataSourceOptions>) {
    super(instanceSettings);
  }
}
