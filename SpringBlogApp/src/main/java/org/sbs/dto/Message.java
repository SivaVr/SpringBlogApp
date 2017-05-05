package org.sbs.dto;

public class Message {

	private String message;
	private int id;
	private String desc;

	public Message() {

	}

	public Message(int id, String title, String desc) {
		this.id = id;
		this.message = title;
		this.desc = desc;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
}
