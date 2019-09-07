package com.stackroute.user.listener;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.user.domain.Supplier;
import com.stackroute.user.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ConsumerListener {
  @Autowired
  SupplierRepository supplierRepository;

  @KafkaListener(topics = "Kafka_Example", groupId = "group_id")
  public void consumeDonor(String user) throws IOException {
    Supplier obj = new ObjectMapper().readValue(user, Supplier.class);
    System.out.println(user);
    supplierRepository.save(obj);
  }
}
