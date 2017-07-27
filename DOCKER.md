# Docker Preparation Instructions

Core file build:
```
docker build -t zachcalvert/zachcalvert .
```

Run:
```
docker run -p 3131:3000 -d --name zachcalvert --rm zachcalvert/zachcalvert
```

Stop:
```
docker stop zachcalvert
```


