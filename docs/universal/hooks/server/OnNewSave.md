---
hide_table_of_contents: true
---

# OnNewSave

## Usage

* Called before a new savefile is created (usually when map has wiped)
* No return handling

## Examples

```csharp
void OnNewSave(string fileName)
{
    Puts($"Server wiped at {DateTime.Now}, new save {fileName} being created...");
}
```
