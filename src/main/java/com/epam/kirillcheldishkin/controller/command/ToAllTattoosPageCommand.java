package com.epam.kirillcheldishkin.controller.command;

import com.epam.kirillcheldishkin.dto.ResponseContent;
import com.epam.kirillcheldishkin.entity.Tattoo;
import com.epam.kirillcheldishkin.service.TattooService;
import com.epam.kirillcheldishkin.service.exception.ServiceException;
import com.epam.kirillcheldishkin.service.factory.ServiceFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

public class ToAllTattoosPageCommand implements Command {
    private ServiceFactory factory = ServiceFactory.getInstance();
    private static final Logger LOGGER = LogManager.getLogger(ToAllTattoosPageCommand.class);

    @Override
    public ResponseContent execute(HttpServletRequest request) {
        ResponseContent content = new ResponseContent();
        try {
            TattooService service = factory.getTattooService();
            List<Tattoo> tattooList = service.findAll();
            request.setAttribute("tattoos", tattooList);
            content.setRouter(new Router(Router.Type.FORWARD, "/WEB-INF/view/admin-tattoos-page.jsp"));
        } catch (ServiceException e) {
            LOGGER.error("Failed while tried to load all tattoos from data base");
            content.setRouter(new Router(Router.Type.FORWARD, "/WEB-INF/view/error-page.jsp"));
        }
        return content;
    }
}
