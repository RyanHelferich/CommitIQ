{
  "appName": "CommitIQ",
  "baseUrl": "https://commitiq-one.vercel.app",
  "auth": {
    "required": false,
    "loginPath": "",
    "username": "$AUTH_USERNAME",
    "password": "$AUTH_PASSWORD",
    "usernameSelector": "",
    "passwordSelector": "",
    "submitSelector": "",
    "successUrlPattern": "",
    "successText": []
  },
  "globalRules": {
    "maxStepTimeSeconds": 45,
    "waitForNetworkIdle": false,
    "notes": [
      "Public synthetic-data demo. No auth, account creation, external data, payment, or destructive action is required.",
      "The first workflow proves the core value: choose a relationship goal, add readiness context, analyze a seeded synthetic conversation, and verify the resulting compatibility report."
    ]
  },
  "workflows": [
    {
      "id": "core-personalized-analysis",
      "name": "Run personalized compatibility analysis",
      "purpose": "Proves CommitIQ turns a synthetic 3-month dating conversation into a goal-aware compatibility report with personalization, spectrum signals, and evidence.",
      "startPath": "/",
      "steps": [
        {
          "action": "goto",
          "value": "/"
        },
        {
          "action": "assertText",
          "selector": "main",
          "value": "Find Compatible Partners"
        },
        {
          "action": "click",
          "selector": "[data-testid=\"goal-long-term\"]"
        },
        {
          "action": "click",
          "selector": "[data-testid=\"self-assessment-toggle\"]"
        },
        {
          "action": "click",
          "selector": "[data-testid=\"readiness-availability-fully\"]"
        },
        {
          "action": "click",
          "selector": "[data-testid=\"readiness-past-yes\"]"
        },
        {
          "action": "click",
          "selector": "[data-testid=\"readiness-time-a-lot\"]"
        },
        {
          "action": "fill",
          "selector": "[data-testid=\"readiness-patterns\"]",
          "value": "avoiding difficult conversations"
        },
        {
          "action": "click",
          "selector": "[data-testid=\"readiness-submit\"]"
        },
        {
          "action": "click",
          "selector": "[data-testid=\"sample-three-month-checkin\"]"
        },
        {
          "action": "click",
          "selector": "[data-testid=\"analyze-submit\"]"
        },
        {
          "action": "waitForUrl",
          "value": "/results"
        },
        {
          "action": "waitForText",
          "value": "Compatibility Report: The 3-Month Check-In"
        },
        {
          "action": "assertVisible",
          "selector": "[data-testid=\"personalization-panel\"]"
        },
        {
          "action": "assertVisible",
          "selector": "[data-testid=\"compatibility-summary-section\"]"
        },
        {
          "action": "assertVisible",
          "selector": "[data-testid=\"signal-spectrum\"]"
        },
        {
          "action": "assertVisible",
          "selector": "[data-testid=\"evidence-timeline\"]"
        }
      ],
      "success": {
        "requiredUrlPattern": "/results",
        "allowedUrlPatterns": [],
        "allText": [
          "Compatibility Report: The 3-Month Check-In",
          "Personalization applied",
          "Dating readiness",
          "Synthetic banking context",
          "Relationship Strengths",
          "Strong Compatibility",
          "Needs Discussion",
          "Evidence Timeline"
        ],
        "anyText": [
          "Strong Connection",
          "Excellent Match",
          "Promising Start"
        ],
        "visibleSelectors": [
          "[data-testid=\"personalization-panel\"]",
          "[data-testid=\"compatibility-summary-section\"]",
          "[data-testid=\"signal-spectrum\"]",
          "[data-testid=\"evidence-timeline\"]"
        ]
      }
    },
    {
      "id": "judge-rubric-evidence",
      "name": "Verify rubric evidence page",
      "purpose": "Proves the app exposes a judge-readable evidence map aligned to the hackathon scoring rubric.",
      "startPath": "/judge",
      "steps": [
        {
          "action": "goto",
          "value": "/judge"
        },
        {
          "action": "assertText",
          "selector": "main",
          "value": "Judge Evidence — CommitIQ"
        },
        {
          "action": "assertText",
          "selector": "main",
          "value": "Rubric Evidence Map"
        },
        {
          "action": "assertText",
          "selector": "main",
          "value": "Technical Execution & Demo Proof"
        }
      ],
      "success": {
        "requiredUrlPattern": "/judge",
        "allowedUrlPatterns": [],
        "allText": [
          "Demand Reality & Problem Severity",
          "Target Customer & Market Scope",
          "Solution Fit & Product Design",
          "Technical Execution & Demo Proof",
          "Differentiation & Investment Readiness",
          "Quantified outcome",
          "Success KPI",
          "First buyer",
          "Market signal",
          "Smallest wedge",
          "Smallest Wedge: CommitIQ Coach Review Report",
          "Value before platform",
          "Scope estimate",
          "Production-ready",
          "Hackathon-grade",
          "Impact metric",
          "No login, auth, or test credentials required."
        ],
        "anyText": [],
        "visibleSelectors": [
          "main",
          ".judge-table"
        ]
      }
    },
    {
      "id": "methodology-and-safety",
      "name": "Verify methodology and boundaries",
      "purpose": "Proves the app explains its AI analysis method, personalization inputs, signal categories, and synthetic-data safety boundaries.",
      "startPath": "/methodology",
      "steps": [
        {
          "action": "goto",
          "value": "/methodology"
        },
        {
          "action": "assertText",
          "selector": "main",
          "value": "How CommitIQ Works"
        },
        {
          "action": "assertText",
          "selector": "main",
          "value": "The 4-Level Compatibility Spectrum"
        },
        {
          "action": "assertText",
          "selector": "main",
          "value": "Personalization Inputs"
        },
        {
          "action": "assertText",
          "selector": "main",
          "value": "Signal Categories Detected"
        }
      ],
      "success": {
        "requiredUrlPattern": "/methodology",
        "allowedUrlPatterns": [],
        "allText": [
          "Relationship Strength",
          "Strong Compatibility",
          "Needs Discussion",
          "Potential Concern",
          "Personalization Applied panel",
          "All conversations in the demo are synthetic."
        ],
        "anyText": [],
        "visibleSelectors": [
          "main",
          ".method-table"
        ]
      }
    },
    {
      "id": "machine-readable-evidence",
      "name": "Verify machine-readable evidence JSON",
      "purpose": "Proves the app publishes machine-readable rubric facts on the same origin for automated judge inspection.",
      "startPath": "/judge-evidence.json",
      "steps": [
        {
          "action": "goto",
          "value": "/judge-evidence.json"
        },
        {
          "action": "waitForText",
          "value": "CommitIQ"
        },
        {
          "action": "waitForText",
          "value": "authRequired"
        },
        {
          "action": "assertText",
          "selector": "body",
          "value": "https://commitiq-one.vercel.app"
        }
      ],
      "success": {
        "requiredUrlPattern": "/judge-evidence.json",
        "allowedUrlPatterns": [],
        "allText": [
          "CommitIQ",
          "Know Before You Commit",
          "authRequired",
          "rubricEvidence",
          "technicalExecutionAndDemoProof"
        ],
        "anyText": [],
        "visibleSelectors": [
          "body"
        ]
      }
    }
  ],
  "manualReviewTriggers": []
}
