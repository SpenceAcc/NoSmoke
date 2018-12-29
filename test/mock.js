'use strict';

function MockDriver() {}

MockDriver.prototype.send = function() {
  let args = Object.assign({}, arguments);

  return new Promise((resolve, reject) => {
    // check if args are nil
    if (args.length === 0) {
      resolve();
    }

    console.log('here');

    // check path and mock
    if (args[0].endsWith('/title')) {
      resolve();
    } else if (args[0].endsWith('/url')) {
      resolve();
    }
  });
};

module.exports = {
  mockRegexRaw: '{"index":"0","class":"android.widget.FrameLayout","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[0,0][1080,1794]","node":{"index":"0","class":"android.widget.LinearLayout","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[0,0][1080,1794]","node":{"index":"0","resource-id":"android:id/content","class":"android.widget.FrameLayout","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[0,63][1080,1794]","node":{"index":"0","class":"android.widget.LinearLayout","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[0,63][1080,1794]","node":[{"index":"0","class":"android.widget.LinearLayout","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[0,457][1080,545]","node":{"index":"0","text":"Android Bootstrap","class":"android.widget.TextView","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[0,457][1080,545]"}},{"index":"1","resource-id":"com.github.android_app_bootstrap:id/topline","class":"android.widget.RelativeLayout","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[53,860][1027,965]","node":{"index":"0","text":"please input username","resource-id":"com.github.android_app_bootstrap:id/mobileNoEditText","class":"android.widget.EditText","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"true","enabled":"true","focusable":"true","focused":"true","scrollable":"false","long-clickable":"true","password":"false","selected":"false","bounds":"[58,860][1027,965]"}},{"index":"2","resource-id":"com.github.android_app_bootstrap:id/bottomline","class":"android.widget.RelativeLayout","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[53,1018][1027,1123]","node":{"index":"0","text":"please input password","resource-id":"com.github.android_app_bootstrap:id/codeEditText","class":"android.widget.EditText","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"true","enabled":"true","focusable":"true","focused":"false","scrollable":"false","long-clickable":"true","password":"false","selected":"false","bounds":"[58,1018][1027,1123]"}},{"index":"3","class":"android.widget.LinearLayout","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"false","enabled":"true","focusable":"false","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[0,1254][1080,1354]","node":{"index":"0","text":"Login","resource-id":"com.github.android_app_bootstrap:id/login_button","class":"android.widget.Button","package":"com.github.android_app_bootstrap","checkable":"false","checked":"false","clickable":"true","enabled":"true","focusable":"true","focused":"false","scrollable":"false","long-clickable":"false","password":"false","selected":"false","bounds":"[53,1254][1027,1354]"}}]}}}}'
};
