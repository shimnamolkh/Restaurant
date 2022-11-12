# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Customer(Document):
	@frappe.whitelist()
	def all_menu_items_section(self,doctype):
		data = frappe.get_all(doctype,fields=["*"])


		for d in data:
			self.append("menu_table",{
				"menu_id":d.menu_id,
				"menu_name":d.name,
				"image":d.image,
				"status":d.status,
				"price":d.price
			})

	# pass
	
	# def validate(self):
	# 	self.get_list()
	# 	self.get_list_d()
		
	# def get_list(self):
	# 	doc = frappe.get_list('Tables',
	# 			filters={
	# 				'book_table':'Occupied'
	# 			},
	# 			fields=['table_number']
	# 	)
	# 	for d in doc:
	# 		if self.book_table == "Occupied":
	# 			frappe.throw(" {0} is occupied").format(d.table_number)


	# def get_list_d(self):
	# 	doc = frappe.get_list('Tables',
	# 			filters={
	# 				'book_table':'Dirty'
	# 			},
	# 			fields=['table_number']
	# 	)
	# 	for d in doc:
	# 		if self.select_floor == "Dirty":
	# 			frappe.throw("Sorry !! {0} is Dirty").format(d.table_number)
# 	def validate(self):
# 		self.sql()
# 	def sql(self):
# 		data = frappe.db.sql("""
#                                 SELECT
#                                     name3
                                    
#                                 FROM
#                                     `tabMenu`
#                                 WHERE
#                                     status = 'Available'
#                             """, as_dict=1)
# 		for d in data:
# 			frappe.msgprint(("The Menus Available today {0}").format(d.name3))

# # # 
# 	def validate(self):
# 		self.get_list()
		
# 	def get_list(self):
# 		doc = frappe.get_list('Item',
# 				filters={
# 					'status':'Available'
# 				},
# 				fields=['name1','price']
# 		)
# 		for d in doc:
# 			if self.status == "Available":
# 				frappe.msgprint((" {0} is present, price is {1}").format(d.name1,d.price))
# 			else:
# 				frappe.throw("Sorry !! {0} is finished").format(d.name1)
	# def validate(self):
	# 	self.get_list()
		
	# def get_list(self):
	# 	doc = frappe.get_list('Menu',
	# 			filters={
	# 				'status': 'Available'
	# 			},
	# 			fields=['name3','price']
	# 	)
	# 	for d in doc:
	# 		if self.menu_check == 1:
	# 			frappe.msgprint((" {0} is present, price is {1}").format(d.name3,d.price))
	# 		else:
	# 			frappe.throw("Sorry !! {0} is finished").format(d.name3)
	