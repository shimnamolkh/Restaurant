// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Cash Billing', {
	
	refresh:function(frm){
		if(frm.is_new()){
		
			let d = new frappe.ui.Dialog({
				title:'How Was The Meal?',
				fields:[{
					label:'Feedback',
					fieldname:'feedback',
					fieldtype:'Text'
			
				}],
				primary_action_label:'submit',
				primary_action(values){
					frm.set_value('feedback',values.feedback)
					
				d.hide()
			}
		});
		d.show();
		
		
	
	
		}
		

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
	payment_complete: function(frm) {
		msgprint("Thank You!!! visit Again")
	}
	
	});

				
