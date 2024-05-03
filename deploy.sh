echo "Deploy Start"

echo "aws dist 폴더 삭제"
ssh -i "emcast-crew-pulse-dev.pem" ec2-user@ec2-13-209-187-234.ap-northeast-2.compute.amazonaws.com sudo sh /home/ec2-user/remove.sh

echo "aws dist & storybook 폴더 업로드"
scp -r ./dist ec2-user@ec2-13-209-187-234.ap-northeast-2.compute.amazonaws.com:/home/ec2-user/ssm-react/dist
# scp -r ./storybook-static ec2-user@ec2-13-209-187-234.ap-northeast-2.compute.amazonaws.com:/home/ec2-user/ssm-react/storybook-static

echo "aws server restart shell 실행"
ssh -i "emcast-crew-pulse-dev" ec2-user@ec2-13-209-187-234.ap-northeast-2.compute.amazonaws.com sudo sh /home/ec2-user/startpass.sh

exit
