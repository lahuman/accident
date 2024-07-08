# Car Accident 프로젝트

## 개요
Car Accident 프로젝트는 자동차 사고 데이터를 처리하고 분석하기 위한 시스템입니다.

## 사용 기술
- **TypeScript:** 주요 프로그래밍 언어
- **NestJS:** 서버사이드 애플리케이션 프레임워크
- **JavaScript:** 보조 스크립팅 언어
- **ESLint & Prettier:** 코드 품질 및 스타일 관리 도구
- **PNPM:** 패키지 매니저

## 실행 방식
1. 프로젝트를 클론합니다.
2. _env 를 .env로 파일 명을 변겅하고, 설정 내역을 채워줍니다.  
3. 종속성을 설치합니다:
    ```bash
    pnpm install
    ```
4. 서버를 시작합니다:
    ```bash
    pnpm start
    ```

## 샘플 데이터 호출
```bash
curl --location 'localhost:3000/accident' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '{
    "name": "임광규",
    "accelerometer": "11.123123,22.123123,22.123123",
    "gyroscope": "1.123123,2.123123,2.123123",
    "speed": 22.234234234,
    "acceleration": 11.12234236579873,
    "rotationRate": 33.45687654234,
    "latitude": 12.2333465234,
    "longitude": 2.123454567863
}'
```