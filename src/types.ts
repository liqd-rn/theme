import { CSSProperties } from 'react';

export type ThemedComponentDefinitionStyle      = CSSProperties
export type ThemedComponentDefinitionProps      = {[ key: string ]: any }
export type ThemedComponentDefinitionClass      = {[ key: string ]: ThemedComponentDefinition }
export type ThemedComponentDefinitionComponent  = {[ key: string ]: ThemedComponentDefinition }

export type ThemedComponentDefinition =
{
    style       ?: ThemedComponentDefinitionStyle
    props       ?: ThemedComponentDefinitionProps
    class       ?: ThemedComponentDefinitionClass
    component   ?: ThemedComponentDefinitionComponent
}

export type ThemedComponentProps = { style?: CSSProperties, class?: string, adjust?: string }