declare module 'repowidget' {
    export function createRepoWidget(options: {
      username: string;
      containerID: string;
    }): void;
}