# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Tables(Document):
	def validate(self):
		self.create_available()
		self.new_document()


	def create_available(self):
		if self.status == 'Available' and not self.table_id:
			doc = frappe.get_doc({
				"doctype": "Available Tables",
				"number":self.table_number,
				"type":self.type,
				"rate":self.rate,
			})
			doc.insert(ignore_permissions=True, ignore_mandatory=True)
			self.table_id = doc.name

	# def new_document(self):
	# 		doc = frappe.new_doc('Tables')
	# 		doc.table_id = 21
	# 		doc.table_number = 12
	# 		doc.status= 'Available'
	# 		doc.save()
			
 
			

		
