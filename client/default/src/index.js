// Code is based on examples from Sencha Touch API Documentation

MCommerceDemo = new Ext.Application({
  name: "ListDemo",

  launch: function() {

    MCommerceDemo.productPanel = new Ext.Panel({
      id: 'productpanel',
      tpl: '<h1>Product info: {name}!</h1> <div class="content">{description}</div>',
      scroll: 'vertical',
      dockedItems: [
        {
          xtype: 'toolbar',
          items: [
            {
              text: 'back to list',
              ui: 'back',
              handler: function() {
                MCommerceDemo.Viewport.setActiveItem('disclosurelist', {type:'slide', direction:'right'});
              }
            },
            {
              xtype: "spacer"
            },
            {
              text: "Buy",
              ui: "action",
              handler: function() {
                MCommerceDemo.Viewport.setActiveItem('buyformpanel');
              }
            }
          ]
        },
        {
          xtype: 'toolbar',
          dock: 'bottom',
          ui: 'light',
          items: [
            {
              xtype: "spacer"
            },
            {
              text: "Buy",
              ui: "action",
              handler: function() {
                MCommerceDemo.Viewport.setActiveItem('buyformpanel');
              }
            }
          ]
        }
      ]
    });


    MCommerceDemo.buyFormPanel = new Ext.Panel({
      id: 'buyformpanel',
      tpl: 'Buying {name} !',
      html: "",
      items: [
        {
          xtype: 'form',
          scroll: 'vertical',
          id: 'buyform',
          items: [
            {
              xtype: "fieldset",
              title: "Your Order data.",
              items: [
                {
                  xtype: 'textfield',
                  name: "name",
                  label: 'Name',
                  placeHolder: "Jan Kowalski",
                  required: true
                },
                {
                  xtype: 'emailfield',
                  name: "email",
                  label: 'Email',
                  placeHolder: "me@yourdomain.com",
                  required: true
                }
              ]
            }
          ]
        },
        {
          dock: "bottom",
          title: "Confirm",
          xtype: "button",
          text: "Confirm",
          handler: function() {
            MCommerceDemo.Viewport.setActiveItem('boughtformpanel', {type:'slide', direction:'left'});
          }
        }


      ],
      dockedItems: [
        {
          xtype: 'toolbar',
          items: [
            {
              text: 'back to product',
              ui: 'back',
              handler: function() {
                MCommerceDemo.Viewport.setActiveItem('productpanel', {type:'slide', direction:'right'});
              }
            }
          ]
        }
      ]
    });


    MCommerceDemo.boughtFormPanel = new Ext.Panel({
      id: 'boughtformpanel',
      tpl: 'Thank you for buying {name}',
      html: '<h1>Your order has beed placed.</h1>Thank you for buying with us !',
      dockedItems: [
        {
          xtype: 'toolbar',
          items: [
            {
              text: 'back to list',
              ui: 'back',
              handler: function() {
                MCommerceDemo.Viewport.setActiveItem('disclosurelist', {type:'slide', direction:'right'});
              }
            }
          ]
        }
      ]
    });

    MCommerceDemo.listPanel = new Ext.List({
      id: 'disclosurelist',
      store: MCommerceDemo.ListStore,
      itemTpl: '<div class="product">{name} ${price}</div>',
      grouped: true,
      disableSelection: 'true',
      listeners:  {
        itemtap: function (dataView, index, item, e) {
          var record = dataView.store.getAt(index);
          MCommerceDemo.productPanel.update(record.data);
          //                MCommerceDemo.buyFormPanel.update(record.data);
          MCommerceDemo.Viewport.setActiveItem('productpanel');
        }
      }
      //            onItemDisclosure: function(record, btn, index) {
      //            }
    });


    MCommerceDemo.aboutPanel = new Ext.Panel({
      id: 'aboutpanel',
      html: "<h1> Mobile phones store </h1> <p> best store in the world ever !</p>"

    });


    MCommerceDemo.Viewport = new Ext.Panel({
      //            fullscreen: true,
      height: "100%",
      layout: 'card',
      cardSwitchAnimation: 'slide',
      items: [MCommerceDemo.listPanel, MCommerceDemo.productPanel, MCommerceDemo.buyFormPanel, MCommerceDemo.boughtFormPanel]
    });

    MCommerceDemo.MainViewport = new Ext.TabPanel({
      fullscreen: true,
      tabBar: {
        dock: 'bottom',
        ui: 'light',
        layout: {
          pack: 'center'
        }
      },
      items: [
        {
          iconCls: "bookmarks",
          title: "Products",
          dockedItems: [MCommerceDemo.Viewport]
        },
        {
          iconCls: "info",
          title: "About",
          dockedItems: [MCommerceDemo.aboutPanel]
        }
      ]
    });
  }
});
