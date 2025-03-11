import React, {useEffect} from "react";
import {createRepoWidget} from "repowidget";

interface repoWidgetProperties {
    username: string;
    containerID: string;
}

const RepoWidgetComponent: React.FC<repoWidgetProperties> = ({username, containerID}) => {
    useEffect(() => {
        if(createRepoWidget) {
            const id= "my-repos";
            createRepoWidget({
                username,
                containerID: id,
            });
        }
    }, [username]);
    return (
        <div id="my-repos"></div>
    )
};

export default RepoWidgetComponent;