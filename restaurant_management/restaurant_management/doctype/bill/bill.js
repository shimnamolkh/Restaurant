// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bill', {
    
    refresh:function(frm){
        	if(!frm.is_new()){
        		frm.trigger('order_delivered');
        
        
        	}
        
        },
        
        order_delivered:function(frm){
            
        	frappe.msgprint(("select Billing Method"))
        
        },

    refresh: function(frm) {
		frm.add_custom_button('Cash', () => {
			frappe.new_doc('Cash Billing', {
				bill_id:frm.doc.name

			})
		})
        frm.add_custom_button('Card', () => {
			frappe.new_doc('Card Biling', {
				bill_id:frm.doc.name

			})
		})
	},
    
	customer_link: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Customer",
				name:frm.doc.customer_link

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('customer_id',r.message.customer_id)
					frm.set_value('space_rent',r.message.space_rent)
					
			
				}
			}

		});
	},

	order_link: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Order",
				name:frm.doc.order_link

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('order_id',r.message.order_id)
					frm.set_value('item_id',r.message.item_id)
					frm.set_value('total',r.message.item_total)
					
			
				}
			}

		});
	},
	validate: function(frm) {
        frm.set_value('actual_total',(frm.doc.total) + (frm.doc.space_rent))
    },
});
