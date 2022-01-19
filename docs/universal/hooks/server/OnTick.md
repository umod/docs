---
hide_table_of_contents: true
---

# OnTick

## Usage

* Called each tick (defined by the tick rate of the server)
* For better performance, avoid using heavy calculations in this hook
* No return handling

## Examples

```csharp
void OnTick()
{
    // Do lightweight stuff
}
```
