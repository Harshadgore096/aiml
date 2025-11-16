// Sample vlog data
const vlogsData = {
    1: {
        title: "How LLMs Generate Text",
        subtitle: "A deep dive into tokenization, logits, and sampling strategies",
        date: "November 16, 2025",
        category: "Large Language Models",
        readTime: "12 min read",
        tags: ["#LLM", "#TextGeneration", "#Tokenization", "#AI", "#MachineLearning"],
        content: `
            <section class="video-container">
                <div class="video-placeholder">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="url(#gradient)"/>
                        <path d="M30 25L55 40L30 55V25Z" fill="white"/>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="80" y2="80">
                                <stop offset="0%" style="stop-color:#667eea"/>
                                <stop offset="100%" style="stop-color:#764ba2"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>Video Tutorial: Neural Network Basics</p>
                </div>
            </section>

            <section class="content-section">
                <h2>What Are Neural Networks?</h2>
                <p>Neural networks are computational models inspired by the human brain's structure and function. They consist of interconnected nodes (neurons) organized in layers that process and transform data to learn patterns and make predictions.</p>
                
                <div class="highlight-box">
                    <h4>Key Concept</h4>
                    <p>A neural network learns by adjusting the weights of connections between neurons through a process called backpropagation.</p>
                </div>
            </section>

            <section class="content-section">
                <h2>Architecture Components</h2>
                <ul class="custom-list">
                    <li><strong>Input Layer:</strong> Receives the raw data</li>
                    <li><strong>Hidden Layers:</strong> Process and transform the data</li>
                    <li><strong>Output Layer:</strong> Produces the final prediction</li>
                    <li><strong>Activation Functions:</strong> Introduce non-linearity</li>
                </ul>
            </section>

            <section class="content-section">
                <h2>Code Example</h2>
                <div class="code-block">
                    <pre><code>import numpy as np

class NeuralNetwork:
    def __init__(self, input_size, hidden_size, output_size):
        self.W1 = np.random.randn(input_size, hidden_size)
        self.W2 = np.random.randn(hidden_size, output_size)
    
    def forward(self, X):
        self.z1 = np.dot(X, self.W1)
        self.a1 = self.sigmoid(self.z1)
        self.z2 = np.dot(self.a1, self.W2)
        output = self.sigmoid(self.z2)
        return output
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-x))</code></pre>
                </div>
            </section>

            <section class="content-section">
                <h2>Real-World Applications</h2>
                <div class="grid-cards">
                    <div class="card">
                        <h3>🖼️ Image Recognition</h3>
                        <p>Classify images, detect objects, and recognize faces</p>
                    </div>
                    <div class="card">
                        <h3>💬 Text Analysis</h3>
                        <p>Sentiment analysis, translation, and text generation</p>
                    </div>
                    <div class="card">
                        <h3>🎮 Game Playing</h3>
                        <p>Train agents to play complex games like Chess and Go</p>
                    </div>
                    <div class="card">
                        <h3>🏥 Medical Diagnosis</h3>
                        <p>Detect diseases from medical imaging and patient data</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <h2>Next Steps</h2>
                <p>In the next vlog, we'll dive deeper into deep learning fundamentals and explore how multiple layers enable neural networks to learn complex patterns. Stay tuned!</p>
            </section>
        `
    },
    2: {
        title: "Deep Learning Fundamentals",
        subtitle: "Exploring multi-layer architectures and advanced concepts",
        date: "November 12, 2025",
        category: "Deep Learning",
        readTime: "12 min read",
        tags: ["#DeepLearning", "#AI", "#NeuralNetworks", "#Backpropagation"],
        content: `
            <section class="video-container">
                <div class="video-placeholder">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="url(#gradient)"/>
                        <path d="M30 25L55 40L30 55V25Z" fill="white"/>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="80" y2="80">
                                <stop offset="0%" style="stop-color:#667eea"/>
                                <stop offset="100%" style="stop-color:#764ba2"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>Video Tutorial: Deep Learning Architecture</p>
                </div>
            </section>

            <section class="content-section">
                <h2>Understanding Deep Learning</h2>
                <p>Deep learning is a subset of machine learning that uses neural networks with multiple layers (hence "deep") to progressively extract higher-level features from raw input data.</p>
                
                <div class="highlight-box">
                    <h4>Key Insight</h4>
                    <p>The "depth" in deep learning refers to the number of layers in the network. More layers allow the network to learn more complex representations.</p>
                </div>
            </section>

            <section class="content-section">
                <h2>Why Deep Networks Work</h2>
                <ul class="custom-list">
                    <li><strong>Feature Hierarchy:</strong> Each layer learns increasingly abstract features</li>
                    <li><strong>Representation Learning:</strong> Automatically discovers useful representations</li>
                    <li><strong>End-to-End Learning:</strong> Learns directly from raw data to output</li>
                    <li><strong>Scalability:</strong> Performance improves with more data and compute</li>
                </ul>
            </section>

            <section class="content-section">
                <h2>Popular Architectures</h2>
                <div class="grid-cards">
                    <div class="card">
                        <h3>🔷 CNNs</h3>
                        <p>Convolutional Neural Networks for image processing</p>
                    </div>
                    <div class="card">
                        <h3>🔄 RNNs</h3>
                        <p>Recurrent Neural Networks for sequential data</p>
                    </div>
                    <div class="card">
                        <h3>⚡ Transformers</h3>
                        <p>Attention-based models for NLP and more</p>
                    </div>
                    <div class="card">
                        <h3>🎨 GANs</h3>
                        <p>Generative Adversarial Networks for creation</p>
                    </div>
                </div>
            </section>
        `
    },
    3: {
        title: "Computer Vision & CNNs",
        subtitle: "Teaching machines to see and understand images",
        date: "November 14, 2025",
        category: "Computer Vision",
        readTime: "10 min read",
        tags: ["#ComputerVision", "#CNN", "#ImageProcessing", "#DeepLearning"],
        content: `
            <section class="content-section">
                <h2>Introduction to Computer Vision</h2>
                <p>Computer vision enables machines to derive meaningful information from digital images and videos. Convolutional Neural Networks (CNNs) have revolutionized this field.</p>
                
                <div class="highlight-box">
                    <h4>Core Concept</h4>
                    <p>CNNs use specialized layers that preserve spatial relationships in images, making them perfect for visual tasks.</p>
                </div>
            </section>

            <section class="content-section">
                <h2>CNN Building Blocks</h2>
                <ul class="custom-list">
                    <li><strong>Convolutional Layers:</strong> Extract local features using filters</li>
                    <li><strong>Pooling Layers:</strong> Reduce spatial dimensions</li>
                    <li><strong>Fully Connected Layers:</strong> Make final predictions</li>
                    <li><strong>Dropout:</strong> Prevent overfitting</li>
                </ul>
            </section>
        `
    },
    4: {
        title: "Natural Language Processing",
        subtitle: "Understanding and generating human language with AI",
        date: "November 15, 2025",
        category: "NLP",
        readTime: "11 min read",
        tags: ["#NLP", "#TextProcessing", "#AI", "#LanguageModels"],
        content: `
            <section class="content-section">
                <h2>What is NLP?</h2>
                <p>Natural Language Processing bridges the gap between human communication and computer understanding, enabling machines to process, analyze, and generate natural language.</p>
            </section>

            <section class="content-section">
                <h2>Common NLP Tasks</h2>
                <div class="grid-cards">
                    <div class="card">
                        <h3>📝 Text Classification</h3>
                        <p>Categorize text into predefined classes</p>
                    </div>
                    <div class="card">
                        <h3>🎯 Named Entity Recognition</h3>
                        <p>Identify and classify named entities in text</p>
                    </div>
                    <div class="card">
                        <h3>🌐 Machine Translation</h3>
                        <p>Translate text between languages</p>
                    </div>
                    <div class="card">
                        <h3>💭 Sentiment Analysis</h3>
                        <p>Determine emotional tone of text</p>
                    </div>
                </div>
            </section>
        `
    },
    5: {
        title: "Transformer Architecture",
        subtitle: "The revolutionary model changing AI forever",
        date: "November 16, 2025",
        category: "Deep Learning",
        readTime: "15 min read",
        tags: ["#Transformers", "#Attention", "#GPT", "#BERT"],
        content: `
            <section class="content-section">
                <h2>The Transformer Revolution</h2>
                <p>Introduced in the paper "Attention is All You Need", transformers have become the foundation for modern AI models like GPT, BERT, and beyond.</p>
                
                <div class="highlight-box">
                    <h4>Key Innovation</h4>
                    <p>Self-attention mechanism allows the model to weigh the importance of different parts of the input when making predictions.</p>
                </div>
            </section>

            <section class="content-section">
                <h2>Transformer Components</h2>
                <ul class="custom-list">
                    <li><strong>Self-Attention:</strong> Relates different positions in a sequence</li>
                    <li><strong>Multi-Head Attention:</strong> Multiple attention mechanisms in parallel</li>
                    <li><strong>Positional Encoding:</strong> Adds sequence order information</li>
                    <li><strong>Feed-Forward Networks:</strong> Process attention outputs</li>
                </ul>
            </section>

            <section class="content-section">
                <h2>Popular Transformer Models</h2>
                <div class="grid-cards">
                    <div class="card">
                        <h3>🤖 GPT</h3>
                        <p>Generative Pre-trained Transformer for text generation</p>
                    </div>
                    <div class="card">
                        <h3>📚 BERT</h3>
                        <p>Bidirectional Encoder for understanding context</p>
                    </div>
                    <div class="card">
                        <h3>🎯 T5</h3>
                        <p>Text-to-Text Transfer Transformer</p>
                    </div>
                    <div class="card">
                        <h3>🖼️ ViT</h3>
                        <p>Vision Transformer for image tasks</p>
                    </div>
                </div>
            </section>
        `
    }
};

// DOM Elements
const vlogItems = document.querySelectorAll('.vlog-item');
const vlogContent = document.getElementById('vlogContent');
const searchInput = document.getElementById('searchVlogs');

// Load vlog content
function loadVlog(vlogId) {
    const vlog = vlogsData[vlogId];
    if (!vlog) return;

    // Update breadcrumb
    document.querySelector('.current-vlog').textContent = vlog.title.split(' ').slice(0, 2).join(' ');

    // Update content
    vlogContent.innerHTML = `
        <div class="vlog-header">
            <div class="vlog-meta">
                <span class="badge">${vlog.category}</span>
                <span class="reading-time">${vlog.readTime}</span>
            </div>
            <h1 class="vlog-title">${vlog.title}</h1>
            <p class="vlog-subtitle">${vlog.subtitle}</p>
            <div class="author-info">
                <div class="author-avatar">HG</div>
                <div class="author-details">
                    <p class="author-name">Harshad Gore</p>
                    <p class="publish-date">Published on ${vlog.date}</p>
                </div>
            </div>
        </div>

        <div class="vlog-body">
            ${vlog.content}
        </div>

        <div class="vlog-footer">
            <div class="tags">
                ${vlog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="navigation-buttons">
                <button class="nav-btn" onclick="navigateVlog(${vlogId - 1})" ${vlogId <= 1 ? 'disabled' : ''}>← Previous Vlog</button>
                <button class="nav-btn" onclick="navigateVlog(${vlogId + 1})" ${vlogId >= 5 ? 'disabled' : ''}>Next Vlog →</button>
            </div>
        </div>
    `;

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigate between vlogs
function navigateVlog(vlogId) {
    if (vlogId < 1 || vlogId > 5) return;
    
    // Remove active class from all items
    vlogItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to selected item
    const selectedItem = document.querySelector(`[data-vlog="${vlogId}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
        loadVlog(vlogId);
    }
}

// Event listeners for vlog items
vlogItems.forEach(item => {
    item.addEventListener('click', () => {
        const vlogId = parseInt(item.getAttribute('data-vlog'));
        
        // Remove active class from all items
        vlogItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Load vlog content
        loadVlog(vlogId);
    });
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    vlogItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Initialize with first vlog
document.addEventListener('DOMContentLoaded', () => {
    loadVlog(1);
});
