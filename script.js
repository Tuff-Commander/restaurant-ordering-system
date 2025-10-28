document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const order = document.getElementById('orders').value;
        const quantity = document.getElementById('quantity').value;
        const deliveryOption = document.getElementById('deliveryOption').value;
        const address = document.getElementById('address').value;
        const payment = document.getElementById('payment').value;
        
        // Create message
        const message = `NEW ORDER
        
Name: ${name}
Phone: ${phone}
Order: ${order}
Quantity: ${quantity}
Type: ${deliveryOption}
Address: ${address}
Payment: ${payment}`;
        
        // Restaurant WhatsApp number (replace with Hungry Nomad's number)
        const restaurantPhone = '2347063268414';
        
        // Create WhatsApp link
        const whatsappURL = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Optional: Clear form
        document.getElementById('orderForm').reset();
        alert('Order sent! Restaurant will contact you soon.');
    });
