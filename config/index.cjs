/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx33b9abb3e2a61908',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4e6d52bc5a6e1b604faa03c16bca4e84',

  PROVINCE: '河北',
  CITY: '保定',

  USERS: [
    {
      // 想要发送的人的名字
      name: '津津',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4epy6Dbi2lpURrd8fSbn2ybAjb8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5YatXEOCBt2oAUmdprfdAgUlByA1ettrl9yBI1t4kuk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-01',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '津津', year: '1999', date: '11-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-02-06' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-07-18' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'gQiLmPH_c79BXnwNlvC_W0yGeXGy5b1eOl7CU7Ge6fU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4epy6Dbi2lpURrd8fSbn2ybAjb8',
    }
  ],

}

module.exports = USER_CONFIG

