import { ThemedComponentDefinition } from './types';

export default class Component
{
    constructor( name: string, public definition: ThemedComponentDefinition )
    {
        this.name = name;
    }

    public extend( definition: ThemedComponentDefinition )
    {
        
    }
}