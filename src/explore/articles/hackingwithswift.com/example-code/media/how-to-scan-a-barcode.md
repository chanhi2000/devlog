---
lang: ko-KR
title: "How to scan a barcode"
description: "Article(s) > How to scan a barcode"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to scan a barcode"
    - property: og:description
      content: "How to scan a barcode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-scan-a-barcode.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to scan a barcode | Media - free Swift example code",
  "desc": "How to scan a barcode",
  "link": "https://hackingwithswift.com/example-code/media/how-to-scan-a-barcode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
iOS supports barcode scanning out of the box, but to be honest it's not that easy to do. So, here's a complete `UIViewController` subclass that you can add to your Swift project and get immediate support with no hassle – all you need to do is update the `found(code:)` method to take some interesting action, then present this view controller when you're ready:

```swift
import AVFoundation
import UIKit

class ScannerViewController: UIViewController, AVCaptureMetadataOutputObjectsDelegate {
    var captureSession: AVCaptureSession!
    var previewLayer: AVCaptureVideoPreviewLayer!

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = UIColor.black
        captureSession = AVCaptureSession()

        guard let videoCaptureDevice = AVCaptureDevice.default(for: .video) else { return }
        let videoInput: AVCaptureDeviceInput

        do {
            videoInput = try AVCaptureDeviceInput(device: videoCaptureDevice)
        } catch {
            return
        }

        if (captureSession.canAddInput(videoInput)) {
            captureSession.addInput(videoInput)
        } else {
            failed()
            return
        }

        let metadataOutput = AVCaptureMetadataOutput()

        if (captureSession.canAddOutput(metadataOutput)) {
            captureSession.addOutput(metadataOutput)

            metadataOutput.setMetadataObjectsDelegate(self, queue: DispatchQueue.main)
            metadataOutput.metadataObjectTypes = [.ean8, .ean13, .pdf417]
        } else {
            failed()
            return
        }

        previewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
        previewLayer.frame = view.layer.bounds
        previewLayer.videoGravity = .resizeAspectFill
        view.layer.addSublayer(previewLayer)

        captureSession.startRunning()
    }

    func failed() {
        let ac = UIAlertController(title: "Scanning not supported", message: "Your device does not support scanning a code from an item. Please use a device with a camera.", preferredStyle: .alert)
        ac.addAction(UIAlertAction(title: "OK", style: .default))
        present(ac, animated: true)
        captureSession = nil
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)

        if (captureSession?.isRunning == false) {
            captureSession.startRunning()
        }
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)

        if (captureSession?.isRunning == true) {
            captureSession.stopRunning()
        }
    }

    func metadataOutput(_ output: AVCaptureMetadataOutput, didOutput metadataObjects: [AVMetadataObject], from connection: AVCaptureConnection) {
        captureSession.stopRunning()

        if let metadataObject = metadataObjects.first {
            guard let readableObject = metadataObject as? AVMetadataMachineReadableCodeObject else { return }
            guard let stringValue = readableObject.stringValue else { return }
            AudioServicesPlaySystemSound(SystemSoundID(kSystemSoundID_Vibrate))
            found(code: stringValue)
        }

        dismiss(animated: true)
    }

    func found(code: String) {
        print(code)
    }

    override var prefersStatusBarHidden: Bool {
        return true
    }

    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        return .portrait
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-create-a-barcode">How to create a barcode 
/example-code/media/how-to-create-a-pdf417-barcode">How to create a PDF417 barcode 
/example-code/libraries/how-to-scan-nfc-tags-using-core-nfc">How to scan NFC tags using Core NFC 
/example-code/media/how-to-scan-a-qr-code">How to scan a QR code 
/example-code/vision/how-to-detect-documents-using-vndocumentcameraviewcontroller">How to detect documents using VNDocumentCameraViewController</a>
-->

:::

---

<TagLinks />