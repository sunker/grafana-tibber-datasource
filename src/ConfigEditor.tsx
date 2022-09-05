import React from 'react';
import { ButtonGroup, FieldSet, InlineField, Input, ToolbarButton } from '@grafana/ui';
import {
  DataSourcePluginOptionsEditorProps,
  onUpdateDatasourceResetOption,
  onUpdateDatasourceSecureJsonDataOption,
} from '@grafana/data';
import { TibberDataSourceOptions, TibberDataSourceSecureJsonData } from './types';

export type Props = DataSourcePluginOptionsEditorProps<TibberDataSourceOptions>;

export function ConfigEditor(props: Props) {
  const secureJsonData = props.options.secureJsonData as TibberDataSourceSecureJsonData;
  return (
    <FieldSet label="">
      <InlineField label="API key" labelWidth={28}>
        {props.options?.secureJsonFields?.apiKey ? (
          <ButtonGroup className="width-30">
            <Input disabled placeholder="Configured" translate={undefined} />
            <ToolbarButton
              icon="edit"
              tooltip="Edit API key"
              type="button"
              onClick={onUpdateDatasourceResetOption(props as any, 'apiKey')}
            />
          </ButtonGroup>
        ) : (
          <Input
            aria-label="API key"
            className="width-30"
            value={secureJsonData?.apiKey ?? ''}
            onChange={onUpdateDatasourceSecureJsonDataOption(props, 'apiKey')}
          />
        )}
      </InlineField>
    </FieldSet>
  );
}
