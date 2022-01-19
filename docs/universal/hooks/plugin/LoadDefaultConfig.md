---
hide_table_of_contents: true
---

# LoadDefaultConfig

## Usage

* Called when the configuration for a plugin should be initialized
* Only called if the configuration file does not already exist
* No return handling

## Examples

```csharp
protected override void LoadDefaultConfig()
{
    Puts("Default configuration created");
}
```
