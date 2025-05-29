document.addEventListener("DOMContentLoaded", () => {
  const orders = [
    {
      id: "ORD001",
      date: "2025-05-25",
      items: ["Wireless Mouse", "USB-C Charger"],
      total: 49.99,
      status: "delivered"
    },
    {
      id: "ORD002",
      date: "2025-05-20",
      items: ["Bluetooth Speaker"],
      total: 89.99,
      status: "pending"
    },
    {
      id: "ORD003",
      date: "2025-05-15",
      items: ["Notebook", "Pen Set"],
      total: 25.5,
      status: "delivered"
    }
  ];

  const container = document.getElementById("order-container");
  const statusFilter = document.getElementById("statusFilter");
  const dateFilter = document.getElementById("dateFilter");
  const darkModeBtn = document.getElementById("toggleDarkMode");

  function renderOrders(filteredOrders) {
    container.innerHTML = "";
    filteredOrders.forEach(order => {
      const card = document.createElement("div");
      card.className = "order-card";
      card.innerHTML = `
        <div class="order-header">
          <span class="order-id">#${order.id}</span>
          <span class="order-date">${order.date}</span>
        </div>
        <div class="order-status">Status: ${order.status}</div>
        <div class="order-items">
          <ul>${order.items.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="order-total">Total: $${order.total.toFixed(2)}</div>
        <div class="order-actions">
          <button onclick="reorder('${order.id}')">🔁 Reorder</button>
          <button onclick="downloadInvoice('${order.id}')">📄 Invoice</button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function filterOrders() {
    let filtered = orders;

    const status = statusFilter.value;
    const date = dateFilter.value;

    if (status !== "all") {
      filtered = filtered.filter(order => order.status === status);
    }

    if (date) {
      filtered = filtered.filter(order => order.date === date);
    }

    renderOrders(filtered);
  }

  statusFilter.addEventListener("change", filterOrders);
  dateFilter.addEventListener("input", filterOrders);

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  renderOrders(orders);
});

// Simulate Reorder
function reorder(orderId) {
  alert(`Order ${orderId} added to cart for reorder.`);
}

// Simulate Download Invoice
function downloadInvoice(orderId) {
  const invoiceText = `Invoice for Order ${orderId}\nThank you for your purchase!`;
  const blob = new Blob([invoiceText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `Invoice_${orderId}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}