import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class servlethello extends HttpServlet {
 
   private String message;

   public void init() throws ServletException {
      
      message = "Hello  Human World";
   }

   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
     
      response.setContentType("text/html");

      
      PrintWriter out = response.getWriter();
      out.println("<h3>" + message + "</h1>");
   }

  
}
