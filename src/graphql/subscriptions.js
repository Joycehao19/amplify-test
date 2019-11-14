/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = `subscription OnCreateTeam($owner: String!) {
  onCreateTeam(owner: $owner) {
    id
    name
    description
    owner
  }
}
`;
export const onUpdateTeam = `subscription OnUpdateTeam($owner: String!) {
  onUpdateTeam(owner: $owner) {
    id
    name
    description
    owner
  }
}
`;
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
    id
    name
    description
    owner
  }
}
`;
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
    id
    name
  }
}
`;
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
    id
    name
  }
}
`;
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
    id
    name
  }
}
`;
