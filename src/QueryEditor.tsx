import React from 'react';
import { FieldSet } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from './datasource';
import { TibberDataSourceOptions, TibberQuery } from './types';

type Props = QueryEditorProps<DataSource, TibberQuery, TibberDataSourceOptions>;

export function QueryEditor(props: Props) {
  return (
    <FieldSet label="">
      <hr></hr>
    </FieldSet>
  );
}
