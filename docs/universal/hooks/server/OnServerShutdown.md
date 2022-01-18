---
hide_table_of_contents: true
---

# OnServerShutdown

## Usage

* Called before the server shuts down
* No return handling

## Examples

```csharp
void OnServerShutdown()
{
    Puts($"Server shutdown initiated at {DateTime.Now}");
}
```
