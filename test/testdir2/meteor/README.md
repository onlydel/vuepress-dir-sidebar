---
title: Metoer 가이드 요약
---

# Meteor

meteor는 backend와 frontend를 아우르는 기능을 가진 멋진 프레임웍이다. meteor는 아주 빠르고 쉽게 웹 애플리케이션을 만들수 있는 솔루션을 제공한다. 물론 좀 깊에 파고들면 다 쉽지만은 않다. 하지만 호기심을 포기하면 빠른시간에 완성도 높은 애플리케이션을 만들기에 충분하다.

meteor를 공부하기 전에 HTML, Javascript, CSS의 기본적인 내용은 알고 있어야 한다. 또한, mongoDB 데이터베이스가 기본으로 번들되어 있기 때문에 이것 또한 알고 있어야 한다.

meteor는 기본적으로 서버에서 html을 렌더링해서 클라이언트로 보내는 방식이 아니라 데이터만 내려보내고(data on the wire) 클라이언트가 렌더링 하는 방식이다. 그렇기 때문에 꽤 괜찮은 성능을 발위하는 full-stack의 데이터 반응형 애플리케이션을 개발 할 수 있다.

하지만,

별도의 package 설치 방식으로 인한 종속성관리의 어려움과 클라이언트 메모리 데이터베이스인 minimongo의 사용등에 따른 호환성 문제등이 있지만 심각한 수준은 아닌것으로 생각된다.

Apollo를 개발중인 MDG(Meteor Development Group Inc)에서 관리중인 프레임웍이고, 조직이 확대되고 있는 것으로 보아 당분간은 버전업이 지속될 것으로 보이고 꽤 많은 사용자층을 확보하고 있기 때문에 폐기처분 되지는 않을거라 생각된다.

하지만,

앞 일은 아무도 모르는 거니까...

## 기본 학습

### 공식 사이트 링크

- [가이드](https://guide.meteor.com/)
- [튜토리얼](http://www.meteor.com/tutorials)
- [API 문서](https://docs.meteor.com/)
- [포럼](https://forums.meteor.com/)
- [깃허브](https://github.com/meteor/meteor)

## Blaze

## Vue

meteor의 frontend는 다양한 방법으로 구성 할 수 있다. 기본은 Blaze지만 react, angular, vue를 모두 사용할 수 있다. 여기서는 vue를 사용해서 user interface를 구현하는 방법에 대해 공부한다.

### 참고 사이트 링크

- [vue-meteor](https://github.com/meteor-vue/vue-meteor)

### meteor-vue 연습
