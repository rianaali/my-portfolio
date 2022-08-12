
package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/** Handles requests sent to the /bookRecc URL. Try running a server and navigating to /hello! */
@WebServlet("/bookRecc")
public final class BookReccServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      ArrayList<String> books = new ArrayList<String>();
      books.add("No Longer Human");
      books.add("The Bell Jar");
      books.add("Misery");
      books.add("Tokyo Ghoul");
      books.add("Coraline");
      books.add("Homegoing");
      books.add("The Seven Husbands of Evelyn Hugo");
      String json = convertToJson(books);
      response.setContentType("application/json;");
      response.getWriter().println(json);
  }
  private String convertToJson(ArrayList<String> arr) 
  {
      int numBookReccs = arr.size() - 1;
      int bookReccNum = (int) (Math.floor(Math.random()*(numBookReccs-0+1)));
      String json = "{";
      json += "\"book\": ";
      json += "\"" + arr.get(bookReccNum) + "\"";
      json += "}";
      return json;
  }
}
