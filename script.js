// ================================================================
//  PATIENT RECORDS SYSTEM - COMPLETE JAVASCRIPT
//  Version: 2.0 (with Registration)
// ================================================================

// ================================================================
//  DATA STORAGE FUNCTIONS
// ================================================================

// ----- Patients -----
function getPatients() {
    try { return JSON.parse(localStorage.getItem('patients')) || []; } 
    catch { return []; }
}

function savePatients(patients) {
    localStorage.setItem('patients', JSON.stringify(patients));
}

// ----- Doctors -----
function getDoctors() {
    try { return JSON.parse(localStorage.getItem('doctors')) || []; } 
    catch { return []; }
}

function saveDoctors(doctors) {
    localStorage.setItem('doctors', JSON.stringify(doctors));
}

// ----- Appointments -----
function getAppointments() {
    try { return JSON.parse(localStorage.getItem('appointments')) || []; } 
    catch { return []; }
}

function saveAppointments(appointments) {
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

// ----- Medical Records -----
function getMedicalRecords() {
    try { return JSON.parse(localStorage.getItem('medicalRecords')) || []; } 
    catch { return []; }
}

function saveMedicalRecords(records) {
    localStorage.setItem('medicalRecords', JSON.stringify(records));
}

// ----- Prescriptions -----
function getPrescriptions() {
    try { return JSON.parse(localStorage.getItem('prescriptions')) || []; } 
    catch { return []; }
}

function savePrescriptions(prescriptions) {
    localStorage.setItem('prescriptions', JSON.stringify(prescriptions));
}

// ================================================================
//  SEED DATA (First-time setup)
// ================================================================

function seedData() {
    // Seed Patients
    if (!localStorage.getItem('patients')) {
        const patients = [
            { 
                id: 'p1', name: 'John Smith', dob: '1985-03-15', gender: 'Male', bloodGroup: 'A+',
                email: 'john@email.com', phone: '+1 234 567 890', emergency: '+1 234 567 891', 
                address: '123 Main St, New York, NY 10001',
                insurance: 'BlueCross', policy: 'BC-12345', insuranceExpiry: '2025-12-31', groupNumber: 'GRP-001',
                allergies: 'Penicillin, Peanuts', medications: 'Lisinopril 10mg', conditions: 'Hypertension',
                username: 'john123', password: 'john123', registrationDate: '2024-01-15', status: 'active'
            },
            { 
                id: 'p2', name: 'Sarah Johnson', dob: '1990-07-22', gender: 'Female', bloodGroup: 'B+',
                email: 'sarah@email.com', phone: '+1 234 567 892', emergency: '+1 234 567 893',
                address: '456 Oak Ave, Los Angeles, CA 90001',
                insurance: 'Aetna', policy: 'AE-67890', insuranceExpiry: '2025-06-30', groupNumber: 'GRP-002',
                allergies: 'None', medications: 'Cetirizine 10mg', conditions: 'Allergic Rhinitis',
                username: 'sarah123', password: 'sarah123', registrationDate: '2024-02-20', status: 'active'
            },
            { 
                id: 'p3', name: 'Michael Brown', dob: '1978-11-02', gender: 'Male', bloodGroup: 'O-',
                email: 'michael@email.com', phone: '+1 234 567 894', emergency: '+1 234 567 895',
                address: '789 Pine St, Chicago, IL 60601',
                insurance: 'Cigna', policy: 'CI-24680', insuranceExpiry: '2025-09-15', groupNumber: 'GRP-003',
                allergies: 'Latex', medications: 'Sumatriptan 50mg', conditions: 'Migraine',
                username: 'michael123', password: 'michael123', registrationDate: '2024-03-10', status: 'active'
            },
            { 
                id: 'p4', name: 'Emily Davis', dob: '1995-05-30', gender: 'Female', bloodGroup: 'AB+',
                email: 'emily@email.com', phone: '+1 234 567 896', emergency: '+1 234 567 897',
                address: '321 Elm Blvd, Houston, TX 77001',
                insurance: 'UnitedHealth', policy: 'UH-13579', insuranceExpiry: '2025-11-20', groupNumber: 'GRP-004',
                allergies: 'Sulfa', medications: 'Topical Retinoids', conditions: 'Acne Vulgaris',
                username: 'emily123', password: 'emily123', registrationDate: '2024-04-05', status: 'active'
            },
            { 
                id: 'p5', name: 'Robert Wilson', dob: '1982-09-10', gender: 'Male', bloodGroup: 'B-',
                email: 'robert@email.com', phone: '+1 234 567 898', emergency: '+1 234 567 899',
                address: '654 Maple Dr, Phoenix, AZ 85001',
                insurance: 'Medicare', policy: 'MC-97531', insuranceExpiry: '2025-08-01', groupNumber: 'GRP-005',
                allergies: 'Aspirin', medications: 'Ibuprofen 400mg', conditions: 'Osteoarthritis',
                username: 'robert123', password: 'robert123', registrationDate: '2024-05-20', status: 'active'
            }
        ];
        savePatients(patients);
    }

    // Seed Doctors
    if (!localStorage.getItem('doctors')) {
        const doctors = [
            { id: 'd1', name: 'Dr. Alice Williams', specialty: 'Cardiology', email: 'alice@hospital.com', phone: '+1 234 567 800', availability: 'Mon-Fri, 9:00 AM - 5:00 PM' },
            { id: 'd2', name: 'Dr. Robert Chen', specialty: 'Neurology', email: 'robert@hospital.com', phone: '+1 234 567 801', availability: 'Mon-Thu, 8:00 AM - 4:00 PM' },
            { id: 'd3', name: 'Dr. Maria Garcia', specialty: 'Pediatrics', email: 'maria@hospital.com', phone: '+1 234 567 802', availability: 'Tue-Sat, 10:00 AM - 6:00 PM' },
            { id: 'd4', name: 'Dr. James Taylor', specialty: 'Orthopedics', email: 'james@hospital.com', phone: '+1 234 567 803', availability: 'Mon-Fri, 8:30 AM - 5:30 PM' },
            { id: 'd5', name: 'Dr. Lisa Anderson', specialty: 'Dermatology', email: 'lisa@hospital.com', phone: '+1 234 567 804', availability: 'Wed-Mon, 9:00 AM - 5:00 PM' }
        ];
        saveDoctors(doctors);
    }

    // Seed Appointments
    if (!localStorage.getItem('appointments')) {
        const today = new Date().toISOString().split('T')[0];
        const appointments = [
            { id: 'a1', patientId: 'p1', doctorId: 'd1', date: today, time: '09:00', status: 'scheduled', reason: 'Chest pain' },
            { id: 'a2', patientId: 'p2', doctorId: 'd3', date: today, time: '10:30', status: 'scheduled', reason: 'Child vaccination' },
            { id: 'a3', patientId: 'p3', doctorId: 'd2', date: today, time: '14:00', status: 'scheduled', reason: 'Migraine' },
            { id: 'a4', patientId: 'p4', doctorId: 'd5', date: today, time: '15:30', status: 'scheduled', reason: 'Skin rash' },
            { id: 'a5', patientId: 'p5', doctorId: 'd4', date: today, time: '11:00', status: 'completed', reason: 'Knee pain' }
        ];
        saveAppointments(appointments);
    }

    // Seed Medical Records
    if (!localStorage.getItem('medicalRecords')) {
        const records = [
            { id: 'r1', patientId: 'p1', diagnosis: 'Hypertension', treatment: 'Lisinopril 10mg', notes: 'Monitor blood pressure weekly', date: '2024-01-15' },
            { id: 'r2', patientId: 'p2', diagnosis: 'Allergic Rhinitis', treatment: 'Antihistamines', notes: 'Avoid pollen exposure', date: '2024-02-20' },
            { id: 'r3', patientId: 'p3', diagnosis: 'Migraine', treatment: 'Sumatriptan 50mg', notes: 'Take at onset of symptoms', date: '2024-03-10' },
            { id: 'r4', patientId: 'p4', diagnosis: 'Acne Vulgaris', treatment: 'Topical Retinoids', notes: 'Apply nightly', date: '2024-04-05' },
            { id: 'r5', patientId: 'p5', diagnosis: 'Osteoarthritis', treatment: 'Physical therapy', notes: 'Exercise daily', date: '2024-05-20' }
        ];
        saveMedicalRecords(records);
    }

    // Seed Prescriptions
    if (!localStorage.getItem('prescriptions')) {
        const prescriptions = [
            { id: 'rx1', patientId: 'p1', doctorId: 'd1', medication: 'Lisinopril', dosage: '10mg', refillDate: '2025-12-15', status: 'active', instructions: 'Take once daily' },
            { id: 'rx2', patientId: 'p2', doctorId: 'd3', medication: 'Cetirizine', dosage: '10mg', refillDate: '2025-11-20', status: 'active', instructions: 'Take as needed' },
            { id: 'rx3', patientId: 'p3', doctorId: 'd2', medication: 'Sumatriptan', dosage: '50mg', refillDate: '2025-10-10', status: 'active', instructions: 'Take at onset of migraine' },
            { id: 'rx4', patientId: 'p5', doctorId: 'd4', medication: 'Ibuprofen', dosage: '400mg', refillDate: '2025-09-20', status: 'discontinued', instructions: 'Take with food' }
        ];
        savePrescriptions(prescriptions);
    }
}

// ================================================================
//  AUTHENTICATION
// ================================================================

function checkAuth() {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return false;
    }
    
    const userRole = localStorage.getItem('userRole');
    const userId = localStorage.getItem('userId');
    
    // If patient, they can only access certain pages
    if (userRole === 'patient') {
        const restrictedPages = ['patient.html', 'doctors.html', 'register.html'];
        const currentPage = window.location.pathname.split('/').pop();
        if (restrictedPages.includes(currentPage)) {
            window.location.href = 'dashboard.html';
            return false;
        }
    }
    
    return true;
}

function loginUser(username, password) {
    // Check admin login
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('userRole', 'admin');
        return true;
    }

    // Check patient login
    const patients = getPatients();
    const patient = patients.find(p => p.username === username && p.password === password);
    if (patient) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', patient.name);
        localStorage.setItem('userId', patient.id);
        localStorage.setItem('userRole', 'patient');
        return true;
    }

    return false;
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    window.location.href = 'login.html';
}

function getCurrentUser() {
    return localStorage.getItem('username') || 'Admin';
}

function getCurrentUserRole() {
    return localStorage.getItem('userRole') || 'admin';
}

// ================================================================
//  PATIENT REGISTRATION
// ================================================================

function registerPatient(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('regName').value.trim(),
        dob: document.getElementById('regDob').value,
        gender: document.getElementById('regGender').value,
        bloodGroup: document.getElementById('regBloodGroup').value,
        email: document.getElementById('regEmail').value.trim(),
        phone: document.getElementById('regPhone').value.trim(),
        emergency: document.getElementById('regEmergency').value.trim(),
        address: document.getElementById('regAddress').value.trim(),
        insurance: document.getElementById('regInsurance').value.trim(),
        policy: document.getElementById('regPolicy').value.trim(),
        insuranceExpiry: document.getElementById('regInsuranceExpiry').value,
        groupNumber: document.getElementById('regGroupNumber').value.trim(),
        allergies: document.getElementById('regAllergies').value.trim() || 'None',
        medications: document.getElementById('regMedications').value.trim() || 'None',
        conditions: document.getElementById('regConditions').value.trim() || 'None',
        username: document.getElementById('regUsername').value.trim(),
        password: document.getElementById('regPassword').value.trim(),
        registrationDate: new Date().toISOString().split('T')[0],
        status: 'active'
    };

    // Validate required fields
    if (!data.name || !data.username || !data.password) {
        alert('⚠️ Please fill in all required fields (Name, Username, Password)');
        return;
    }

    if (data.password.length < 6) {
        alert('⚠️ Password must be at least 6 characters long');
        return;
    }

    // Check if username already exists
    const patients = getPatients();
    const existing = patients.find(p => p.username === data.username);
    if (existing) {
        alert('⚠️ Username already taken. Please choose another one.');
        return;
    }

    // Generate patient ID and save
    data.id = 'p' + Date.now();
    patients.push(data);
    savePatients(patients);

    alert('✅ Patient registered successfully!\n\nPatient ID: ' + data.id + '\nName: ' + data.name + '\nUsername: ' + data.username);
    
    // Redirect to login
    window.location.href = 'login.html';
}

// ================================================================
//  UTILITY FUNCTIONS
// ================================================================

function generateId() {
    return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
}

function formatDate(date) {
    if (!date) return 'N/A';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getPatientName(id) {
    const patients = getPatients();
    const patient = patients.find(p => p.id === id);
    return patient ? patient.name : 'Unknown';
}

function getPatientById(id) {
    const patients = getPatients();
    return patients.find(p => p.id === id);
}

function getDoctorName(id) {
    const doctors = getDoctors();
    const doctor = doctors.find(d => d.id === id);
    return doctor ? doctor.name : 'Unknown';
}

function getStatusBadge(status) {
    const badges = {
        'scheduled': 'badge-info',
        'completed': 'badge-success',
        'cancelled': 'badge-danger',
        'active': 'badge-success',
        'discontinued': 'badge-danger',
        'present': 'badge-success',
        'absent': 'badge-danger'
    };
    return badges[status] || 'badge-secondary';
}

// ================================================================
//  DASHBOARD
// ================================================================

function loadDashboard() {
    if (!document.getElementById('totalPatients')) return;
    
    const patients = getPatients();
    const doctors = getDoctors();
    const appointments = getAppointments();
    const prescriptions = getPrescriptions();
    const today = new Date().toISOString().split('T')[0];
    const userRole = localStorage.getItem('userRole');

    // Show patient-specific stats if logged in as patient
    if (userRole === 'patient') {
        const userId = localStorage.getItem('userId');
        const patientAppointments = appointments.filter(a => a.patientId === userId);
        const patientPrescriptions = prescriptions.filter(p => p.patientId === userId);
        
        document.getElementById('totalPatients').textContent = '1';
        document.getElementById('totalDoctors').textContent = doctors.length;
        document.getElementById('todayAppointments').textContent = 
            patientAppointments.filter(a => a.date === today && a.status === 'scheduled').length;
        document.getElementById('activePrescriptions').textContent = 
            patientPrescriptions.filter(p => p.status === 'active').length;

        // Show patient-specific recent activity
        const recent = patientAppointments.slice(-5).reverse();
        const tbody = document.getElementById('recentActivity');
        if (recent.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--text-secondary);">No appointments found</td></tr>';
        } else {
            tbody.innerHTML = recent.map(a => `
                <tr>
                    <td>${getPatientName(a.patientId)}</td>
                    <td>${a.reason || 'Appointment'}</td>
                    <td>${formatDate(a.date)}</td>
                    <td><span class="badge ${getStatusBadge(a.status)}">${a.status}</span></td>
                </tr>
            `).join('');
        }
    } else {
        // Admin view
        document.getElementById('totalPatients').textContent = patients.length;
        document.getElementById('totalDoctors').textContent = doctors.length;
        document.getElementById('todayAppointments').textContent = 
            appointments.filter(a => a.date === today && a.status === 'scheduled').length;
        document.getElementById('activePrescriptions').textContent = 
            prescriptions.filter(p => p.status === 'active').length;

        const recent = appointments.slice(-5).reverse();
        const tbody = document.getElementById('recentActivity');
        if (recent.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--text-secondary);">No recent activity</td></tr>';
        } else {
            tbody.innerHTML = recent.map(a => `
                <tr>
                    <td>${getPatientName(a.patientId)}</td>
                    <td>${a.reason || 'Appointment'}</td>
                    <td>${formatDate(a.date)}</td>
                    <td><span class="badge ${getStatusBadge(a.status)}">${a.status}</span></td>
                </tr>
            `).join('');
        }
    }

    // Set username
    const display = document.getElementById('usernameDisplay');
    if (display) {
        const name = localStorage.getItem('username') || 'Admin';
        display.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    }
}

// ================================================================
//  PATIENT CRUD
// ================================================================

function renderPatients() {
    const tbody = document.getElementById('patientsTable');
    if (!tbody) return;

    const patients = getPatients();
    const search = (document.getElementById('searchPatient')?.value || '').toLowerCase();

    const filtered = patients.filter(p =>
        p.name.toLowerCase().includes(search) ||
        p.email.toLowerCase().includes(search) ||
        p.phone.includes(search) ||
        p.insurance.toLowerCase().includes(search) ||
        p.username.toLowerCase().includes(search)
    );

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;color:var(--text-secondary);">No patients found</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(p => `
        <tr>
            <td><strong>${p.name}</strong></td>
            <td><span style="font-size:0.75rem;color:var(--text-secondary);">${p.id}</span></td>
            <td>${p.phone || 'N/A'}</td>
            <td>${p.emergency || 'N/A'}</td>
            <td>${p.insurance || 'N/A'}</td>
            <td>
                ${p.allergies && p.allergies !== 'None' ? 
                    `<span class="badge badge-danger" title="Allergies: ${p.allergies}">⚠️ Allergies</span>` : 
                    '<span class="badge badge-success">Active</span>'}
            </td>
            <td>${p.username || 'N/A'}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editPatient('${p.id}')">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="deletePatient('${p.id}')">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function openPatientModal() {
    document.getElementById('patientModalTitle').textContent = 'Add Patient';
    document.getElementById('editPatientId').value = '';
    document.getElementById('patientForm').reset();
    document.getElementById('patientModal').classList.add('active');
}

function editPatient(id) {
    const patients = getPatients();
    const p = patients.find(pat => pat.id === id);
    if (!p) return;

    document.getElementById('patientModalTitle').textContent = 'Edit Patient';
    document.getElementById('editPatientId').value = id;
    document.getElementById('patientName').value = p.name;
    document.getElementById('patientDob').value = p.dob || '';
    document.getElementById('patientEmail').value = p.email || '';
    document.getElementById('patientPhone').value = p.phone || '';
    document.getElementById('patientEmergency').value = p.emergency || '';
    document.getElementById('patientInsurance').value = p.insurance || '';
    document.getElementById('patientPolicy').value = p.policy || '';
    document.getElementById('patientAllergies').value = p.allergies || '';
    document.getElementById('patientModal').classList.add('active');
}

function savePatient(e) {
    e.preventDefault();

    const id = document.getElementById('editPatientId').value;
    const data = {
        name: document.getElementById('patientName').value.trim(),
        dob: document.getElementById('patientDob').value,
        email: document.getElementById('patientEmail').value.trim(),
        phone: document.getElementById('patientPhone').value.trim(),
        emergency: document.getElementById('patientEmergency').value.trim(),
        insurance: document.getElementById('patientInsurance').value.trim(),
        policy: document.getElementById('patientPolicy').value.trim(),
        allergies: document.getElementById('patientAllergies').value.trim() || 'None'
    };

    let patients = getPatients();

    if (id) {
        // Update
        const index = patients.findIndex(p => p.id === id);
        if (index !== -1) {
            patients[index] = { ...patients[index], ...data };
        }
    } else {
        // Create
        data.id = 'p' + Date.now();
        data.username = data.email.split('@')[0] || 'user' + Date.now();
        data.password = 'password123';
        data.registrationDate = new Date().toISOString().split('T')[0];
        data.status = 'active';
        patients.push(data);
    }

    savePatients(patients);
    closeModal('patientModal');
    renderPatients();
    if (document.getElementById('totalPatients')) loadDashboard();
}

function deletePatient(id) {
    if (!confirm('Are you sure you want to archive this patient?')) return;
    let patients = getPatients();
    patients = patients.filter(p => p.id !== id);
    savePatients(patients);
    renderPatients();
    if (document.getElementById('totalPatients')) loadDashboard();
}

function filterPatients() {
    renderPatients();
}

// ================================================================
//  DOCTOR CRUD
// ================================================================

function renderDoctors() {
    const tbody = document.getElementById('doctorsTable');
    if (!tbody) return;

    const doctors = getDoctors();
    const search = (document.getElementById('searchDoctor')?.value || '').toLowerCase();

    const filtered = doctors.filter(d =>
        d.name.toLowerCase().includes(search) ||
        d.specialty.toLowerCase().includes(search) ||
        d.email.toLowerCase().includes(search)
    );

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-secondary);">No doctors found</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(d => `
        <tr>
            <td><strong>${d.name}</strong></td>
            <td><span class="badge badge-info">${d.specialty}</span></td>
            <td>${d.email || 'N/A'}</td>
            <td>${d.phone || 'N/A'}</td>
            <td><span class="badge badge-success">${d.availability || 'Available'}</span></td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editDoctor('${d.id}')">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="deleteDoctor('${d.id}')">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function openDoctorModal() {
    document.getElementById('doctorModalTitle').textContent = 'Add Doctor';
    document.getElementById('editDoctorId').value = '';
    document.getElementById('doctorForm').reset();
    document.getElementById('doctorModal').classList.add('active');
}

function editDoctor(id) {
    const doctors = getDoctors();
    const d = doctors.find(doc => doc.id === id);
    if (!d) return;

    document.getElementById('doctorModalTitle').textContent = 'Edit Doctor';
    document.getElementById('editDoctorId').value = id;
    document.getElementById('doctorName').value = d.name;
    document.getElementById('doctorSpecialty').value = d.specialty;
    document.getElementById('doctorEmail').value = d.email || '';
    document.getElementById('doctorPhone').value = d.phone || '';
    document.getElementById('doctorAvailability').value = d.availability || '';
    document.getElementById('doctorModal').classList.add('active');
}

function saveDoctor(e) {
    e.preventDefault();

    const id = document.getElementById('editDoctorId').value;
    const data = {
        name: document.getElementById('doctorName').value.trim(),
        specialty: document.getElementById('doctorSpecialty').value,
        email: document.getElementById('doctorEmail').value.trim(),
        phone: document.getElementById('doctorPhone').value.trim(),
        availability: document.getElementById('doctorAvailability').value.trim()
    };

    let doctors = getDoctors();

    if (id) {
        const index = doctors.findIndex(d => d.id === id);
        if (index !== -1) {
            doctors[index] = { ...doctors[index], ...data };
        }
    } else {
        data.id = 'd' + Date.now();
        doctors.push(data);
    }

    saveDoctors(doctors);
    closeModal('doctorModal');
    renderDoctors();
    if (document.getElementById('totalDoctors')) loadDashboard();
}

function deleteDoctor(id) {
    if (!confirm('Delete this doctor?')) return;
    let doctors = getDoctors();
    doctors = doctors.filter(d => d.id !== id);
    saveDoctors(doctors);
    renderDoctors();
    if (document.getElementById('totalDoctors')) loadDashboard();
}

function filterDoctors() {
    renderDoctors();
}

// ================================================================
//  APPOINTMENT CRUD
// ================================================================

function renderAppointments() {
    const tbody = document.getElementById('appointmentsTable');
    if (!tbody) return;

    const appointments = getAppointments();
    const filterDate = document.getElementById('filterDate')?.value;
    const userRole = localStorage.getItem('userRole');
    
    let filtered = appointments;
    
    // If patient, only show their appointments
    if (userRole === 'patient') {
        const userId = localStorage.getItem('userId');
        filtered = filtered.filter(a => a.patientId === userId);
    }
    
    if (filterDate) {
        filtered = filtered.filter(a => a.date === filterDate);
    }

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-secondary);">No appointments found</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(a => `
        <tr>
            <td>${getPatientName(a.patientId)}</td>
            <td>${getDoctorName(a.doctorId)}</td>
            <td>${formatDate(a.date)}</td>
            <td>${a.time || 'N/A'}</td>
            <td><span class="badge ${getStatusBadge(a.status)}">${a.status}</span></td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editAppointment('${a.id}')">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="cancelAppointment('${a.id}')">❌</button>
            </td>
        </tr>
    `).join('');
}

function populateAppointmentSelects() {
    const patientSelect = document.getElementById('appointmentPatient');
    const doctorSelect = document.getElementById('appointmentDoctor');

    if (patientSelect) {
        const patients = getPatients();
        patientSelect.innerHTML = '<option value="">Select Patient</option>';
        patients.forEach(p => {
            patientSelect.innerHTML += `<option value="${p.id}">${p.name}</option>`;
        });
    }

    if (doctorSelect) {
        const doctors = getDoctors();
        doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
        doctors.forEach(d => {
            doctorSelect.innerHTML += `<option value="${d.id}">${d.name} (${d.specialty})</option>`;
        });
    }
}

function openAppointmentModal() {
    document.getElementById('appointmentModalTitle').textContent = 'Book Appointment';
    document.getElementById('editAppointmentId').value = '';
    document.getElementById('appointmentForm').reset();
    populateAppointmentSelects();
    document.getElementById('appointmentModal').classList.add('active');
}

function editAppointment(id) {
    const appointments = getAppointments();
    const a = appointments.find(app => app.id === id);
    if (!a) return;

    populateAppointmentSelects();

    document.getElementById('appointmentModalTitle').textContent = 'Edit Appointment';
    document.getElementById('editAppointmentId').value = id;
    document.getElementById('appointmentPatient').value = a.patientId;
    document.getElementById('appointmentDoctor').value = a.doctorId;
    document.getElementById('appointmentDate').value = a.date;
    document.getElementById('appointmentTime').value = a.time || '';
    document.getElementById('appointmentReason').value = a.reason || '';
    document.getElementById('appointmentModal').classList.add('active');
}

function saveAppointment(e) {
    e.preventDefault();

    const id = document.getElementById('editAppointmentId').value;
    const data = {
        patientId: document.getElementById('appointmentPatient').value,
        doctorId: document.getElementById('appointmentDoctor').value,
        date: document.getElementById('appointmentDate').value,
        time: document.getElementById('appointmentTime').value,
        reason: document.getElementById('appointmentReason').value.trim(),
        status: 'scheduled'
    };

    if (!data.patientId || !data.doctorId || !data.date) {
        alert('Please fill in all required fields');
        return;
    }

    let appointments = getAppointments();

    if (id) {
        const index = appointments.findIndex(a => a.id === id);
        if (index !== -1) {
            appointments[index] = { ...appointments[index], ...data };
        }
    } else {
        data.id = 'a' + Date.now();
        appointments.push(data);
    }

    saveAppointments(appointments);
    closeModal('appointmentModal');
    renderAppointments();
    if (document.getElementById('todayAppointments')) loadDashboard();
}

function cancelAppointment(id) {
    if (!confirm('Cancel this appointment?')) return;
    let appointments = getAppointments();
    const index = appointments.findIndex(a => a.id === id);
    if (index !== -1) {
        appointments[index].status = 'cancelled';
        saveAppointments(appointments);
        renderAppointments();
        if (document.getElementById('todayAppointments')) loadDashboard();
    }
}

function filterAppointments() {
    renderAppointments();
}

// ================================================================
//  MEDICAL HISTORY CRUD
// ================================================================

function populateHistorySelects() {
    const patientFilter = document.getElementById('historyPatientFilter');
    const recordPatient = document.getElementById('recordPatient');

    if (patientFilter) {
        const patients = getPatients();
        patientFilter.innerHTML = '<option value="">Select Patient</option>';
        patients.forEach(p => {
            patientFilter.innerHTML += `<option value="${p.id}">${p.name}</option>`;
        });
    }

    if (recordPatient) {
        const patients = getPatients();
        recordPatient.innerHTML = '<option value="">Select Patient</option>';
        patients.forEach(p => {
            recordPatient.innerHTML += `<option value="${p.id}">${p.name}</option>`;
        });
    }
}

function loadMedicalHistory() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    const patientId = document.getElementById('historyPatientFilter')?.value;
    const userRole = localStorage.getItem('userRole');
    
    let records = getMedicalRecords();
    
    // If patient, only show their records
    if (userRole === 'patient') {
        const userId = localStorage.getItem('userId');
        records = records.filter(r => r.patientId === userId);
        const patient = getPatientById(userId);
        container.innerHTML = renderTimeline(records, patient);
        return;
    }
    
    if (!patientId) {
        container.innerHTML = '<div style="text-align:center;color:var(--text-secondary);padding:3rem;">Select a patient to view their medical history</div>';
        return;
    }

    records = records.filter(r => r.patientId === patientId);
    const patient = getPatientById(patientId);
    container.innerHTML = renderTimeline(records, patient);
}

function renderTimeline(records, patient) {
    if (records.length === 0) {
        return `
            <div style="text-align:center;color:var(--text-secondary);padding:2rem;">
                <div style="font-size:2rem;margin-bottom:0.5rem;">📋</div>
                <p>No medical records for ${patient ? patient.name : 'this patient'}</p>
            </div>
        `;
    }

    return records.sort((a, b) => new Date(b.date) - new Date(a.date)).map(r => `
        <div class="timeline-item">
            <div class="timeline-date">${formatDate(r.date)}</div>
            <div class="timeline-content">
                <h4>${r.diagnosis}</h4>
                <p><strong>Treatment:</strong> ${r.treatment || 'N/A'}</p>
                ${r.notes ? `<p><strong>Notes:</strong> ${r.notes}</p>` : ''}
                <div style="margin-top:0.3rem;">
                    <button class="btn btn-warning btn-sm" onclick="editRecord('${r.id}')">✏️</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRecord('${r.id}')">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openRecordModal() {
    document.getElementById('recordModalTitle').textContent = 'Add Medical Record';
    document.getElementById('editRecordId').value = '';
    document.getElementById('recordForm').reset();
    populateHistorySelects();
    document.getElementById('recordModal').classList.add('active');
}

function editRecord(id) {
    const records = getMedicalRecords();
    const r = records.find(rec => rec.id === id);
    if (!r) return;

    populateHistorySelects();

    document.getElementById('recordModalTitle').textContent = 'Edit Medical Record';
    document.getElementById('editRecordId').value = id;
    document.getElementById('recordPatient').value = r.patientId;
    document.getElementById('recordDiagnosis').value = r.diagnosis;
    document.getElementById('recordTreatment').value = r.treatment || '';
    document.getElementById('recordNotes').value = r.notes || '';
    document.getElementById('recordModal').classList.add('active');
}

function saveMedicalRecord(e) {
    e.preventDefault();

    const id = document.getElementById('editRecordId').value;
    const data = {
        patientId: document.getElementById('recordPatient').value,
        diagnosis: document.getElementById('recordDiagnosis').value.trim(),
        treatment: document.getElementById('recordTreatment').value.trim(),
        notes: document.getElementById('recordNotes').value.trim(),
        date: new Date().toISOString().split('T')[0]
    };

    if (!data.patientId || !data.diagnosis) {
        alert('Please select a patient and enter a diagnosis');
        return;
    }

    let records = getMedicalRecords();

    if (id) {
        const index = records.findIndex(r => r.id === id);
        if (index !== -1) {
            records[index] = { ...records[index], ...data };
        }
    } else {
        data.id = 'r' + Date.now();
        records.push(data);
    }

    saveMedicalRecords(records);
    closeModal('recordModal');
    loadMedicalHistory();
}

function deleteRecord(id) {
    if (!confirm('Delete this medical record?')) return;
    let records = getMedicalRecords();
    records = records.filter(r => r.id !== id);
    saveMedicalRecords(records);
    loadMedicalHistory();
}

// ================================================================
//  PRESCRIPTION CRUD
// ================================================================

function renderPrescriptions() {
    const tbody = document.getElementById('prescriptionsTable');
    if (!tbody) return;

    const prescriptions = getPrescriptions();
    const search = (document.getElementById('searchPrescription')?.value || '').toLowerCase();
    const userRole = localStorage.getItem('userRole');
    
    let filtered = prescriptions;
    
    // If patient, only show their prescriptions
    if (userRole === 'patient') {
        const userId = localStorage.getItem('userId');
        filtered = filtered.filter(p => p.patientId === userId);
    }

    if (search) {
        filtered = filtered.filter(p =>
            getPatientName(p.patientId).toLowerCase().includes(search) ||
            p.medication.toLowerCase().includes(search) ||
            p.dosage.toLowerCase().includes(search)
        );
    }

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-secondary);">No prescriptions found</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(p => `
        <tr>
            <td>${getPatientName(p.patientId)}</td>
            <td><strong>${p.medication}</strong></td>
            <td>${p.dosage || 'N/A'}</td>
            <td>${p.refillDate ? formatDate(p.refillDate) : 'N/A'}</td>
            <td><span class="badge ${getStatusBadge(p.status)}">${p.status}</span></td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editPrescription('${p.id}')">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="discontinuePrescription('${p.id}')">⛔</button>
            </td>
        </tr>
    `).join('');
}

function populatePrescriptionSelects() {
    const patientSelect = document.getElementById('prescriptionPatient');
    const doctorSelect = document.getElementById('prescriptionDoctor');

    if (patientSelect) {
        const patients = getPatients();
        patientSelect.innerHTML = '<option value="">Select Patient</option>';
        patients.forEach(p => {
            patientSelect.innerHTML += `<option value="${p.id}">${p.name}</option>`;
        });
    }

    if (doctorSelect) {
        const doctors = getDoctors();
        doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
        doctors.forEach(d => {
            doctorSelect.innerHTML += `<option value="${d.id}">${d.name}</option>`;
        });
    }
}

function openPrescriptionModal() {
    document.getElementById('prescriptionModalTitle').textContent = 'Add Prescription';
    document.getElementById('editPrescriptionId').value = '';
    document.getElementById('prescriptionForm').reset();
    populatePrescriptionSelects();
    document.getElementById('prescriptionModal').classList.add('active');
}

function editPrescription(id) {
    const prescriptions = getPrescriptions();
    const p = prescriptions.find(rx => rx.id === id);
    if (!p) return;

    populatePrescriptionSelects();

    document.getElementById('prescriptionModalTitle').textContent = 'Edit Prescription';
    document.getElementById('editPrescriptionId').value = id;
    document.getElementById('prescriptionPatient').value = p.patientId;
    document.getElementById('prescriptionDoctor').value = p.doctorId || '';
    document.getElementById('prescriptionMedication').value = p.medication;
    document.getElementById('prescriptionDosage').value = p.dosage || '';
    document.getElementById('prescriptionRefill').value = p.refillDate || '';
    document.getElementById('prescriptionInstructions').value = p.instructions || '';
    document.getElementById('prescriptionModal').classList.add('active');
}

function savePrescription(e) {
    e.preventDefault();

    const id = document.getElementById('editPrescriptionId').value;
    const data = {
        patientId: document.getElementById('prescriptionPatient').value,
        doctorId: document.getElementById('prescriptionDoctor').value,
        medication: document.getElementById('prescriptionMedication').value.trim(),
        dosage: document.getElementById('prescriptionDosage').value.trim(),
        refillDate: document.getElementById('prescriptionRefill').value,
        instructions: document.getElementById('prescriptionInstructions').value.trim(),
        status: 'active'
    };

    if (!data.patientId || !data.medication) {
        alert('Please select a patient and enter medication');
        return;
    }

    let prescriptions = getPrescriptions();

    if (id) {
        const index = prescriptions.findIndex(rx => rx.id === id);
        if (index !== -1) {
            prescriptions[index] = { ...prescriptions[index], ...data };
        }
    } else {
        data.id = 'rx' + Date.now();
        prescriptions.push(data);
    }

    savePrescriptions(prescriptions);
    closeModal('prescriptionModal');
    renderPrescriptions();
    if (document.getElementById('activePrescriptions')) loadDashboard();
}

function discontinuePrescription(id) {
    if (!confirm('Discontinue this prescription?')) return;
    let prescriptions = getPrescriptions();
    const index = prescriptions.findIndex(p => p.id === id);
    if (index !== -1) {
        prescriptions[index].status = 'discontinued';
        savePrescriptions(prescriptions);
        renderPrescriptions();
        if (document.getElementById('activePrescriptions')) loadDashboard();
    }
}

function filterPrescriptions() {
    renderPrescriptions();
}

// ================================================================
//  MODAL HELPERS
// ================================================================

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});

// ================================================================
//  LOGIN HANDLER
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (loginUser(username, password)) {
                window.location.href = 'dashboard.html';
            } else {
                alert('❌ Invalid credentials!\n\nAdmin: admin / admin123\nPatient: Use registered username/password');
            }
        });
    }

    // Handle registration form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', registerPatient);
    }

    // Check auth on protected pages
    const protectedPages = ['dashboard.html', 'patient.html', 'appointment.html', 
                           'doctors.html', 'history.html', 'prescription.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        if (!checkAuth()) return;
        
        // Initialize page-specific functions
        if (currentPage === 'dashboard.html') {
            seedData();
            loadDashboard();
        } else if (currentPage === 'patient.html') {
            renderPatients();
        } else if (currentPage === 'doctors.html') {
            renderDoctors();
        } else if (currentPage === 'appointment.html') {
            renderAppointments();
        } else if (currentPage === 'history.html') {
            populateHistorySelects();
            loadMedicalHistory();
        } else if (currentPage === 'prescription.html') {
            renderPrescriptions();
        }
    }

    // Handle Enter key on search inputs
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.classList.contains('search-input')) {
            e.preventDefault();
        }
    });
});

// ================================================================
//  KEYBOARD SHORTCUTS
// ================================================================

document.addEventListener('keydown', function(e) {
    // Escape to close modal
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// ================================================================
//  EXPOSE FUNCTIONS TO GLOBAL SCOPE
// ================================================================

// Data functions
window.getPatients = getPatients;
window.savePatients = savePatients;
window.getDoctors = getDoctors;
window.saveDoctors = saveDoctors;
window.getAppointments = getAppointments;
window.saveAppointments = saveAppointments;
window.getMedicalRecords = getMedicalRecords;
window.saveMedicalRecords = saveMedicalRecords;
window.getPrescriptions = getPrescriptions;
window.savePrescriptions = savePrescriptions;

// Patient functions
window.renderPatients = renderPatients;
window.openPatientModal = openPatientModal;
window.editPatient = editPatient;
window.savePatient = savePatient;
window.deletePatient = deletePatient;
window.filterPatients = filterPatients;

// Doctor functions
window.renderDoctors = renderDoctors;
window.openDoctorModal = openDoctorModal;
window.editDoctor = editDoctor;
window.saveDoctor = saveDoctor;
window.deleteDoctor = deleteDoctor;
window.filterDoctors = filterDoctors;

// Appointment functions
window.renderAppointments = renderAppointments;
window.openAppointmentModal = openAppointmentModal;
window.editAppointment = editAppointment;
window.saveAppointment = saveAppointment;
window.cancelAppointment = cancelAppointment;
window.filterAppointments = filterAppointments;

// Medical History functions
window.loadMedicalHistory = loadMedicalHistory;
window.openRecordModal = openRecordModal;
window.editRecord = editRecord;
window.saveMedicalRecord = saveMedicalRecord;
window.deleteRecord = deleteRecord;

// Prescription functions
window.renderPrescriptions = renderPrescriptions;
window.openPrescriptionModal = openPrescriptionModal;
window.editPrescription = editPrescription;
window.savePrescription = savePrescription;
window.discontinuePrescription = discontinuePrescription;
window.filterPrescriptions = filterPrescriptions;

// Registration function
window.registerPatient = registerPatient;

// Utility functions
window.closeModal = closeModal;
window.logout = logout;
window.formatDate = formatDate;
window.getPatientName = getPatientName;
window.getPatientById = getPatientById;
window.getDoctorName = getDoctorName;
window.generateId = generateId;
window.getCurrentUser = getCurrentUser;
window.getCurrentUserRole = getCurrentUserRole;

console.log('🏥 Patient Records System loaded successfully!');
console.log('📊 Dashboard: View stats and activity');
console.log('👤 Patients: Manage patient records');
console.log('📅 Appointments: Schedule and manage appointments');
console.log('👨‍⚕️ Doctors: Manage doctor directory');
console.log('📋 Medical History: View patient medical records');
console.log('💊 Prescriptions: Manage prescriptions');
console.log('📝 Registration: New patients can register');