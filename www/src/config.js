// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "63o98qiana2d4bvgt9koud2uia",     // CognitoClientID
  "api_base_url": "https://01dcqfgc69.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todolambdarefarch.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d17wqbuvmby77n.amplifyapp.com"                                      // AmplifyURL
};

export default config;
