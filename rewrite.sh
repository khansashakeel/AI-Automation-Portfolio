git filter-branch --env-filter '
export GIT_AUTHOR_NAME="Khansa Shakeel"
export GIT_AUTHOR_EMAIL="khansashakeel24@gmail.com"
export GIT_COMMITTER_NAME="Khansa Shakeel"
export GIT_COMMITTER_EMAIL="khansashakeel24@gmail.com"
' --tag-name-filter cat -- --branches --tags
