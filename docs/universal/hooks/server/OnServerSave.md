---
hide_table_of_contents: true
---

# OnServerSave

## Usage

* Called before the server performs a save
* No return behavior

## Examples

```csharp
void OnServerSave()
{
    Puts($"Server save started at {DateTime.Now}");
}
```
