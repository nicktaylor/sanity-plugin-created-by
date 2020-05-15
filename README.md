# 'Created By' Plugin

This plugin stores the user ID of the currently logged in user against a document.

_NOTE: If adding to existing document, the user of the first person who accesses the document will be stored against it as the creator_

This plugin has no visual display, it goes on behind the scenes.

```
fields: [
  {
    name: '_createdBy',
    type: 'createdBy',
    title: 'Created By'
  }
]
```

You can then use it in the deskStructure using a GROQ query $identity:

```
...
S.listItem()
  .title('My Content')
  .child(
    S.documentList()
      .title('Content')
      .menuItems(S.documentTypeList('content').getMenuItems())
      .filter('_type == $type && createdBy == $identity')
      .params({ type: 'content' })
  ),
...
```
