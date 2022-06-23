declare interface IPropertyPaneWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'PropertyPaneWebPartStrings' {
  const strings: IPropertyPaneWebPartStrings;
  export = strings;
}
