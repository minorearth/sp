
const { remote } = require('webdriverio');
const { alertIsPresent } = require('wdio-wait-for');

const capabilities = {
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android",
  "appium:appPackage": "com.dayfireacad.myapp",
  "appium:appActivity": "com.dayfireacad.myapp.MainActivity",
  "appium:noReset": true
};

const wdOpts = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};


const swipeBottomUp = async (driver) => {
  const { width, height } = {width:1050,height:1900}
  const anchor = width * 0.5;
  const startPoint = height * 0.5;
  const endPoint = height * 0.3;
  driver.touchPerform([
    {
      action: 'press',
      options: {
        x: anchor,
        y: startPoint,
      },
    },
    {
      action: 'wait',
      options: {
        ms: 1000,
      },
    },
    {
      action: 'moveTo',
      options: {
        x: anchor,
        y: endPoint,
      },
    },

    {
      action: 'release',
      options: {},
    },
  ]);



}

const findInputByTestId = async (driver, TestID, text) => {
  const elem = await driver.$(`[resource-id="test:id/${TestID}"]`);
  await elem.waitForDisplayed({ timeout: 20000 })
  await elem.addValue(text)
}

const findByTestIdClick = async (driver, TestID) => {
  const elem = await driver.$(`[resource-id="test:id/${TestID}"]`);
  await elem.waitForDisplayed({ timeout: 20000 })
  await elem.click();
}

const findByTestIdIdClick = async (driver, TestID,Id) => {
  const elem = await driver.$(`[resource-id="test:id/${TestID}${Id}"]`);
  await elem.waitForDisplayed({ timeout: 20000 })
  await elem.click();
}

const findInElemByTestIdAndClick = async (driver, TestID, elem) => {
  const elem2 = await elem.$(`[resource-id="test:id/${TestID}"]`);
  await elem2.waitForDisplayed({ timeout: 20000 })
  await elem2.click();
}

const findOkAlertClick = async (driver) => {
  await driver.$('[resource-id="android:id/message"]').waitForDisplayed({ timeout: 10000 })
  const okBtnzu = await driver.$('android.widget.Button');
  await okBtnzu.click();
}

const OK_OKCANCEL = 'button2'
const CANCEL_OKCANCEL = 'button1'

const findOkCancelAlertClick = async (driver, okCancel) => {
  await driver.$('[resource-id="android:id/alertTitle"]').waitForDisplayed({ timeout: 10000 })
  const elem = await driver.$(`[resource-id="android:id/${okCancel}"]`);
  await elem.click();
}

const extractId = (text) => {
  return text.slice('test:id/title'.length)
}

const scrollFindByTestId = async (testId, scrollF, driver) => {
  let elem=await driver.$(`[resource-id="test:id/${testId}"]`)
  while ('error' in elem) {
    await scrollF(driver)
    elem=await driver.$(`[resource-id="test:id/${testId}"]`)
  }
  await scrollF(driver)
  return elem
}

const scrollFindClickByTestId = async (testId, scrollF, driver, corrTestId) => {
  let elem = await scrollFindByTestId(testId, scrollF, driver)
  const id = extractId(await elem.getAttribute('resource-id'))
  findByTestIdClick(driver, `${corrTestId}${id}`)
}

const scrollFindByText = async (text, scrollF, driver) => {
  let elem=await driver.$(`[text*="${text}"]`)
  while ('error' in elem) {
    await scrollF(driver)
    elem=await driver.$(`[text*="${text}"]`)
  }
  await scrollF(driver)
  return elem
}


const scrollFindClickByTextAndId = async (text, scrollF, driver, corrTestId) => {
  let elem = await scrollFindByText(text, scrollF, driver)
  const id = extractId(await elem.getAttribute('resource-id'))
  await findByTestIdClick(driver, `${corrTestId}${id}`)
  return id
}

async function runTest() {

  const driver = await remote(wdOpts);
  try {
    driver.terminateApp('com.dayfireacad.myapp')
    await driver.activateApp('com.dayfireacad.myapp')

    await findByTestIdClick(driver, 'studentRole')
    await findOkAlertClick(driver)

    await findByTestIdClick(driver, 'settings')
    await findInputByTestId(driver, 'userName', 'Test User')
    await findInputByTestId(driver, 'className', '10Т')
    await findByTestIdClick(driver, 'eventsTab')


    await findByTestIdClick(driver, 'fiterAll')
    const eventId= await scrollFindClickByTextAndId('узеи', swipeBottomUp, driver, 'sendBtn')
    await findOkCancelAlertClick(driver, OK_OKCANCEL)

    await findByTestIdClick(driver, 'settings')
    await findByTestIdClick(driver, 'logout')

    await findByTestIdClick(driver, 'teacherRole')
    await findInputByTestId(driver, 'pinInput', '12345')
    await findByTestIdClick(driver, 'login')
    await findOkAlertClick(driver)

    await findByTestIdClick(driver, 'hidden')
    await findOkAlertClick(driver)
    await scrollFindClickByTestId(`event${eventId}`, swipeBottomUp, driver, 'history')


  } finally {
    await driver.pause(1000);
    // await driver.deleteSession();
  }
}

runTest().catch(console.error);