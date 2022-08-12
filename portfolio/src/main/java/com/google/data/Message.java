package com.google.sps.data;

/** An item on a todo list. */
public final class Message {

  private final long id;
  private final String messageText;
 

  public Message(long id, String messageText) {
    this.id = id;
    this.messageText = messageText;
  }
}