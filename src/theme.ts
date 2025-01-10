import React from 'react';
import { ThemedComponentProps, ThemedComponentDefinition } from './types';

export function test({ class: classes, style }: ThemedComponentProps )
{
    return JSON.stringify( style ) + classes;
}

export default class Theme
{
    static get Context(): React.Context<any>
    {
        return React.createContext( null );
    }

    public static component( name: string, definition: ThemedComponentDefinition )
    {
        const componentID = Component.id( this.id, name, options?.classes );
        //@ts-ignore
        const id = ComponentTheme.id( componentID, options?.adjust, options?.style );

        let component_theme = ComponentTheme.get( id );

        if( !component_theme )
        {
            let component = Component.get( componentID );

            if( !component )
            {
                component = this.#component.component( name, options?.classes );
            }

            //@ts-ignore
            component_theme = new ComponentTheme( id, component, options?.adjust, options?.style );
        }

        return component_theme;
    }
}