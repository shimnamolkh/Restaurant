# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class TableTypes(Document):
	def on_submit(self):
		frappe.msgprint("A new table type is added")

	def validate(self):
		doc_count = frappe.db.count('Tables',{'status': 'Available'})
		frappe.msgprint(("The Number of AVilable Tables {0}").format(doc_count))
			

