// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Card Biling', {
	refresh:function(frm){
		if(frm.is_new()){
		
			let d = new frappe.ui.Dialog({
				title:'Enter the Card details',
				fields:[{
			
					label:'Card Number',
					fieldname:'card_number',
					fieldtype:'Password'
				},

				{
					label:'CVV',
					fieldname:'cvv',
					fieldtype:'Password'
				},
				{
					label:'Pin Number',
					fieldname:'pin_number',
					fieldtype:'Password'
				

			
				}],
				primary_action_label:'Submit',
				primary_action(values){
					
					frm.set_value('card_number',values.card_number)
					frm.set_value('cvv',values.cvv)
					frm.set_value('pin_number',values.pin_number)
					d.hide()
				}
			});
			d.show();
			
			
		
		
			}
			
	
		},

	after_save: function(frm) {
		frappe.msgprint({
			title:__("Notification"),
			indicator:'red',
			message:__("Amount withdrawed from your account")
		})
	},
	bill_link: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Bill",
				name:frm.doc.bill_link

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('customer_id',r.message.customer_id)
					frm.set_value('actual_total',r.message.actual_total)
					
			
				}
			}

		});
	},
		
	refresh: function(frm) {
		frm.add_custom_button('Back', () => {
			frappe.new_doc('Bill', {
				order_id:frm.doc.name

			})
		})
	}
	
				 	
});
