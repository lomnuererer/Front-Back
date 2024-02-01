** env_guide **

PORT=

JWT_KEY=

------------
** api_service **

method    path    params    body

POST    /auth/register  none    {username, password, confirmPassword, email}
POST    /auth/login     none    {username, password}
PUT     /todo           :id     {title, duedate}

------

Note

NVC (Models, route+Controller, View)
