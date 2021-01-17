# chrome.accessibilityFeatures.animationPolicy

> it controls the animations on the page. you can pause or just animate for once or allow to animate for many times. it needs two permissions ->
>
> 1.  accessibilityFeatures.read -> for get the feature. get() function use read permission.
> 2.  accessibilityFeatures.modify -> for modify feature. set() and clear() functions use modify permission.

it has 4 methods->

---

> 1.  set() -> it set the animationPolicy using set the value. it takes 2 arguments first one is the object that define which value to be set and second is the callback function.callback function called after the completion of set operation. eg -
>
> ```javascript
> chrome.accessibilityFeatures.animationPolicy.set({ set_value: value }, function () {});
> ```
>
> 2.  onChange() -> it instantly fired when set operation is completed. it take listener as an argument and that listener has a object as a parameter that object describe about levelOfControl, value and incognitoSpecific. incognitoSpecific is a boolean it only works in incognito mode. eg -
>
> ```javascript
> chrome.accessibilityFeatures.animationPolicy.onChange.addListener(data => console.log(data));
> ```
>
> 3.  get() -> get method is used to get the value of the set method. it takes 2 arguments first is an object and the second is the callback function. object take boolean for the incognito mode. it is optional you can just set empty object because default is set to false and the callback take object as an parameter that describe about levelOfControl, value and incognitoSpecific. incognitoSpecific only present if we set it true. eg -
>
> ```javascript
> chrome.accessibilityFeatures.animationPolicy.get({}, policy => console.log(policy));
> ```
>
> 4.  clear() -> clear is use to clears the settings and restore default value. it takes 2 arguments. first is the object that contains the value to be cleared and second is the callback function.
>
> ```javascript
> chrome.accessibilityFeatures.animationPolicy.clear({ clear_value }, () => {});
> ```
