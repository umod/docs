---
hide_table_of_contents: true
---

# LoadDefaultMessages

## Usage

* Called when the localization for a plugin should be registered
* No return handling

## Examples

```csharp
protected override void LoadDefaultMessages()
{
    lang.RegisterMessages(new Dictionary<string, string>
    {
        ["AnExample"] = "This is an example message!",
        ["AnotherExample"] = "Here is another example"
    }, this);
}
```
