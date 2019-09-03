package com.example.designerdashboard.service;

import com.example.designerdashboard.model.Dorder;
import com.example.designerdashboard.model.Order;
import com.example.designerdashboard.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OderService {
    private OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Dorder saveDesigns(Dorder designer) {
        Dorder designer1= orderRepository.save(designer);
        return designer1;
    }

    @Override
    public List<Dorder> getDesigns() {
        List<Dorder> designerList= orderRepository.findAll();
        return designerList;
    }

    @Override
    public Order updateDesigns(Order designer, int id) {
        return null;
    }

    @Override
    public Optional<Dorder> deleteDesigns(int id) {
        Optional<Dorder> order = orderRepository.findById(id);
         orderRepository.deleteById(id);

         return  order;
    }
}
