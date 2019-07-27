curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=3c113adb2810b0c2f151e398db9163b1531eea07 \
    --form config=@/Users/student/Documents/GenDesc-Service/.circleci/config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/ZalloProject/GenDesc-Service/tree/testing