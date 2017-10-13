interface INsStarterKitsGitService {
    getPackageJsonFromSource(templateName: string): Promise<any>;
    getAssetsContent(templateName: string, versionTag: string): Promise<any>;
    clonePageTemplate(pageName: string, flavor: string, templatesDirectory: string): Promise<string>;
}